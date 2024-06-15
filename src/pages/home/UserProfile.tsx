import { useCallback, useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'

import { CardTypeResponse } from '@/types/card'
import { TradeType } from '@/types/trade'
import { CardInfo } from '@/components/CardInfo'
import { TradeCard } from '@/components/TradeCard'
import { CustomTabs } from '@/components/CustomTabs'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Dialog } from '@/components/ui/Dialog'
import { TabsContent } from '@/components/ui/Tabs'
import { MagicCard } from '@/components/MagicCard'
import { MainContext } from '@/contexts/MainProvider'

export function UserProfile() {
  const navigate = useNavigate()
  const {
    myCards,
    isLoadingMyTrades,
    fetchMyTrades,
    loadMyDeck,
    removeExchangeRequest
  } = useContext(MainContext)

  const [myTrades, setMyTrades] = useState<TradeType[] | null>(null)
  const [focusedCard, setFocusedCard] = useState<CardTypeResponse>()
  const [dialogOpen, setDialogOpen] = useState(false)

  const loadMyTrades = useCallback(async () => {
    try {
      const response = await fetchMyTrades()
      setMyTrades(response)
    } catch (error) {
      toast.error(
        'Erro ao buscar suas solicitações de troca. Tente novamente mais tarde.'
      )
    }
  }, [fetchMyTrades])

  const loadMyCards = useCallback(async () => {
    try {
      await loadMyDeck()
    } catch (error) {
      toast.error('Erro ao buscar suas cartas. Tente novamente mais tarde.')
    }
  }, [loadMyDeck])

  const handleDeleteExchangeRequest = async (requestId: string) => {
    try {
      await removeExchangeRequest(requestId)
      setMyTrades(myTrades!.filter(trade => trade.id !== requestId))
      setDialogOpen(false)
      toast.success('Solicitação de troca excluída com sucesso!')
    } catch (error) {
      toast.error(
        'Erro ao excluir a solicitação de troca. Tente novamente mais tarde.'
      )
    }
  }

  const handleRequestTradeClick = () => {
    if (myCards && myCards.length > 0) {
      navigate('/trade-request')
    } else {
      toast.error('Você ainda não adquiriu cartas para troca.')
    }
  }

  useEffect(() => {
    loadMyTrades()
    loadMyCards()
  }, [loadMyTrades, loadMyCards])

  return (
    <div className='mt-4 flex flex-col gap-8 px-10'>
      <div className='mb-6 flex w-full items-start justify-between'>
        <div className='mb-6'>
          <h1 className='mb-3 text-3xl font-bold tracking-tight'>Perfil</h1>
          <p className='text-base text-muted-foreground'>
            Gerencie todas as suas solicitações de troca abertas e aproveite seu
            deck!
          </p>
        </div>
        <Button type='button' onClick={handleRequestTradeClick}>
          Solicitar Troca
        </Button>
      </div>
      <div className='flex w-full'>
        <CustomTabs
          tabs={[
            { value: 'exchanges', title: 'Suas Trocas Abertas' },
            { value: 'cards', title: 'Suas Cartas' }
          ]}
          defaultTab='exchanges'
        >
          <TabsContent value='exchanges' className='w-full'>
            <div className='flex w-full flex-wrap gap-x-8 gap-y-12'>
              {myTrades && myTrades.length > 0 && !isLoadingMyTrades ? (
                myTrades.map(trade => (
                  <TradeCard
                    key={trade.id}
                    tradeInfo={trade}
                    isProfile={true}
                    onDelete={() => handleDeleteExchangeRequest(trade.id)}
                  />
                ))
              ) : isLoadingMyTrades ? (
                <p>Carregando...</p>
              ) : myTrades && myTrades.length === 0 ? (
                <Card className='flex h-96 w-full flex-col items-center justify-center gap-3 py-10'>
                  <p className='text-center text-sm text-muted-foreground'>
                    Você ainda não tem solicitações de troca abertas
                  </p>
                </Card>
              ) : null}
            </div>
          </TabsContent>
          <TabsContent value='cards' className='mb-10 w-full'>
            <div className='flex w-full flex-wrap justify-start gap-x-8 gap-y-12'>
              <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                {myCards && myCards.length > 0
                  ? myCards.map(card => (
                      <Button
                        key={card.id}
                        variant='ghost'
                        onClick={() => {
                          setFocusedCard(card)
                          setDialogOpen(true)
                        }}
                        className='h-[20rem] w-[14rem] p-0'
                      >
                        <MagicCard
                          className='h-full w-full'
                          src={card.imageUrl}
                        />
                      </Button>
                    ))
                  : null}
                {myCards && <CardInfo card={focusedCard || myCards[0]} />}
              </Dialog>
              {myCards && myCards.length === 0 ? (
                <Card className='flex h-96 w-full flex-col items-center justify-center gap-3 py-10'>
                  <p className='text-center text-sm text-muted-foreground'>
                    Você ainda não tem cartas
                  </p>
                  <Button variant='default' asChild className='text-base'>
                    <Link to='/available-cards'>Adquirir Cartas</Link>
                  </Button>
                </Card>
              ) : null}
            </div>
          </TabsContent>
        </CustomTabs>
      </div>
    </div>
  )
}
