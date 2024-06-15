import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react'

import { api } from '../lib/axios'
import { AuthContext } from './AuthProvider'
import { TradeListInterface, TradeType } from '@/types/trade'
import { CardTypeResponse, CardsListResponse } from '@/types/card'

interface GetOpenTradesResponse extends TradeListInterface {}

interface GetTradesParams {
  rpp: string
  page: string
}

export interface GetRegisteredCardsResponse extends CardsListResponse {}

export interface GetRegisteredCardsParams {
  rpp: string
  page: string
}

interface RegisterExchangeRequestParams {
  cardId: string
  type: 'OFFERING' | 'RECEIVING'
}

interface MainContextType {
  openTrades: GetOpenTradesResponse | null
  registeredCards: GetRegisteredCardsResponse | any
  myCards: CardTypeResponse[] | null
  isLoadingOpenTrades: boolean
  isLoadingMyTrades: boolean
  loadOpenTrades: (data: GetTradesParams) => Promise<void>
  loadAllRegisteredCards: (data: GetRegisteredCardsParams) => Promise<void>
  fetchMyTrades: () => Promise<TradeType[] | null>
  loadMyDeck: () => Promise<CardTypeResponse[]>
  addMyDeck: (cardIds: string[]) => Promise<void>
  createExchangeRequest: (
    cards: RegisterExchangeRequestParams[]
  ) => Promise<void>
  removeExchangeRequest: (requestId: string) => Promise<void>
}

interface MainProviderProps {
  children: React.ReactNode
}

export const MainContext = createContext({} as MainContextType)

export function MainProvider({ children }: MainProviderProps) {
  const { user, isAuthenticated } = useContext(AuthContext)
  const [openTrades, setOpenTrades] = useState<TradeListInterface | null>(null)
  const [registeredCards, setRegisteredCards] =
    useState<CardsListResponse | null>(null)
  const [myCards, setMyCards] = useState<CardTypeResponse[] | null>(null)
  const [isLoadingMyTrades, setIsLoadingMyTrades] = useState(false)
  const [isLoadingOpenTrades, setIsLoadingOpenTrades] = useState(false)

  const filterValidCards = (cards: CardTypeResponse[]) => {
    return cards.filter(card => card.name && card.description && card.imageUrl)
  }

  /**
   * Fetches open trades from the API.
   */
  const loadOpenTrades = useCallback(async (data: GetTradesParams) => {
    const { rpp, page } = data
    setIsLoadingOpenTrades(true)

    try {
      const response = await api.get<GetOpenTradesResponse>(
        `/trades?rpp=${rpp}&page=${page}`
      )
      setOpenTrades(response.data)
    } finally {
      setIsLoadingOpenTrades(false)
    }
  }, [])

  /**
   * Fetches registered cards from the API.
   */
  const loadAllRegisteredCards = useCallback(
    async (data: GetRegisteredCardsParams) => {
      const { rpp, page } = data

      const response = await api.get<GetRegisteredCardsResponse>(
        `/cards?rpp=${rpp}&page=${page}`
      )
      const filteredCards = filterValidCards(response.data.list)
      setRegisteredCards({ ...response.data, list: filteredCards })
    },
    []
  )

  /**
   * Fetches user's trades from the API.
   */
  const fetchMyTrades = useCallback(async () => {
    setIsLoadingMyTrades(true)
    const token = localStorage.getItem('token')

    if (!token) {
      setIsLoadingMyTrades(false)
      return null
    }

    const response = await api.get<GetOpenTradesResponse>(
      '/trades?rpp=10&page=1',
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    )

    setIsLoadingMyTrades(false)
    return user
      ? response.data.list.filter(trade => trade.userId === user.id)
      : null
  }, [user])

  /**
   * Fetches user's cards from the API.
   */
  const loadMyDeck = useCallback(async () => {
    const token = localStorage.getItem('token')

    if (!token) return []

    const response = await api.get<CardTypeResponse[]>('/me/cards', {
      headers: { Authorization: `Bearer ${token}` }
    })

    const filteredCards = filterValidCards(response.data)
    setMyCards(filteredCards)
    return filteredCards
  }, [])

  /**
   * Registers a new card to the user's collection.
   */
  const addMyDeck = useCallback(
    async (cardIds: string[]) => {
      const token = localStorage.getItem('token')

      await api.post(
        '/me/cards',
        { cardIds },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      )

      loadMyDeck()
    },
    [loadMyDeck]
  )

  /**
   * Registers a new exchange request.
   */
  const createExchangeRequest = useCallback(
    async (requestArray: RegisterExchangeRequestParams[]) => {
      const token = localStorage.getItem('token')

      await api.post(
        '/trades',
        { cards: requestArray },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      )
    },
    []
  )

  /**
   * Deletes an existing exchange request.
   */
  const removeExchangeRequest = useCallback(async (requestId: string) => {
    const token = localStorage.getItem('token')

    await api.delete(`/trades/${requestId}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
  }, [])

  /**
   * Fetches initial data when the component is mounted.
   */
  useEffect(() => {
    loadOpenTrades({ rpp: '10', page: '1' })
    loadAllRegisteredCards({ rpp: '25', page: '1' })

    if (isAuthenticated) {
      loadMyDeck()
    }
  }, [isAuthenticated, loadOpenTrades, loadAllRegisteredCards, loadMyDeck])

  return (
    <MainContext.Provider
      value={{
        openTrades,
        registeredCards,
        myCards,
        isLoadingMyTrades,
        isLoadingOpenTrades,
        loadOpenTrades,
        loadAllRegisteredCards,
        fetchMyTrades,
        loadMyDeck,
        addMyDeck,
        createExchangeRequest,
        removeExchangeRequest
      }}
    >
      {children}
    </MainContext.Provider>
  )
}
