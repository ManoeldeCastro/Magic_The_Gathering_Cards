import { CardType } from './card-types'

export type TradeCardType = {
  id: string
  cardId: string
  tradeId: string
  type: 'OFFERING' | 'RECEIVING'
  card: CardTypeResponse
}

export type TradeType = {
  id: string
  userId: string
  createdAt: string
  user: {
    name: string
  }
  tradeCards: TradeCardType[]
}

export interface TradeListInterface {
  list: TradeType[]
  rpp: number
  page: number
  more: boolean
}
