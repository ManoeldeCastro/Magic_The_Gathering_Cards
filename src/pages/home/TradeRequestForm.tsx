import { ArrowLeft } from 'lucide-react'
import { useCallback, useContext, useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'

import { CardInfo } from '@/components/CardInfo'
import ConfirmationDialog from '@/components/ConfirmationDialog'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Dialog } from '@/components/ui/Dialog'
import { MagicCard } from '@/components/MagicCard'
import { MainContext } from '@/contexts/MainProvider'
import { CardTypeResponse } from '@/types/card'
import { ItemsPerPageFilter } from '@/components/ItemsPerPageFilter'
import { Pagination } from '@/components/Pagination'

type SelectedCard = {
  cardId: string
  type: 'OFFERING' | 'RECEIVING'
}

export function TradeRequestForm() {
  const navigate = useNavigate()
  const {
    registeredCards,
    myCards,
    loadMyDeck,
    loadAllRegisteredCards,
    createExchangeRequest
  } = useContext(MainContext)

  const [offeredCards, setOfferedCards] = useState<SelectedCard[]>([])
  const [requestedCards, setRequestedCards] = useState<SelectedCard[]>([])
  const [selectedCard, setSelectedCard] = useState<CardTypeResponse>()
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(25)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [step, setStep] = useState(0)

  const loadMyCards = useCallback(async () => {
    try {
      await loadMyDeck()
    } catch (error) {
      toast.error(
        'Houve um problema ao buscar suas cartas. Tente novamente mais tarde.'
      )
    }
  }, [loadMyDeck])

  const handleSelectOfferedCard = (cardId: string) => {
    const cardExists = offeredCards.some(card => card.cardId === cardId)
    if (cardExists) {
      setOfferedCards(offeredCards.filter(card => card.cardId !== cardId))
    } else if (offeredCards.length < 5) {
      setOfferedCards([...offeredCards, { cardId, type: 'OFFERING' }])
    } else {
      toast.error('Você pode selecionar até 5 cartas apenas.')
    }
  }

  const handleSelectRequestedCard = (cardId: string) => {
    const cardExists = requestedCards.some(card => card.cardId === cardId)
    if (cardExists) {
      setRequestedCards(requestedCards.filter(card => card.cardId !== cardId))
    } else if (requestedCards.length < offeredCards.length) {
      setRequestedCards([...requestedCards, { cardId, type: 'RECEIVING' }])
    } else {
      toast.error(
        'Por favor, selecione um número igual de cartas às oferecidas.'
      )
    }
  }

  const handleFinalizeRequest = async () => {
    try {
      setIsLoading(true)
      const requestPayload = [...offeredCards, ...requestedCards]

      await createExchangeRequest(requestPayload)

      setDialogOpen(false)
      setIsLoading(false)
      toast.success('Solicitação de troca criada com sucesso!')

      navigate('/user-profile', { replace: true })
    } catch (error) {
      setIsLoading(false)
      toast.error(
        'Houve um problema ao concluir a solicitação. Tente novamente mais tarde.'
      )
    }
  }

  const handleProceedToNextStep = () => {
    if (offeredCards.length === 0) {
      toast.error('Por favor, selecione pelo menos uma carta.')
    } else {
      setStep(1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleItemsPerPageChange = async (newRpp: string) => {
    try {
      await loadAllRegisteredCards({ rpp: newRpp, page: String(currentPage) })
      setItemsPerPage(Number(newRpp))
    } catch (error) {
      toast.error(
        'Houve um problema ao buscar as cartas registradas. Tente novamente mais tarde.'
      )
    }
  }

  const updateCurrentPage = async (newPage: number) => {
    try {
      await loadAllRegisteredCards({
        rpp: String(itemsPerPage),
        page: String(newPage)
      })
      setCurrentPage(newPage)
    } catch (error) {
      toast.error(
        'Houve um problema ao buscar as cartas registradas. Tente novamente mais tarde.'
      )
    }
  }

  const hasMoreCards = registeredCards ? registeredCards.more : true

  useEffect(() => {
    loadMyCards()
  }, [loadMyCards])

  return (
    <>
      <div className='mt-4 flex flex-col gap-6 px-10'>
        {step === 0 ? (
          <Button
            variant='link'
            asChild
            className='m-0 h-5 w-5 p-0'
            disabled={isLoading}
          >
            <Link to='/'>
              <ArrowLeft className='h-5 w-5 text-foreground' />
            </Link>
          </Button>
        ) : (
          <Button
            type='button'
            onClick={() => {
              setStep(0)
              setRequestedCards([])
            }}
            variant='link'
            className='m-0 h-5 w-5 p-0'
            disabled={isLoading}
          >
            <ArrowLeft className='h-5 w-5 text-foreground' />
          </Button>
        )}

        {step === 0 ? (
          <div className='flex w-full items-end justify-between'>
            <div className='space-y-3'>
              <h1 className='text-3xl font-bold tracking-tight'>
                Criar Solicitação de Troca
              </h1>
              <p className='text-sm'>
                Selecione as cartas que você deseja <strong>oferecer</strong>
              </p>
              <span className='flex text-sm text-muted-foreground'>
                Selecione até 5 cartas
              </span>
            </div>
            <div className='flex text-sm text-muted-foreground'>
              {offeredCards.length} de 5 cartas selecionadas
            </div>
          </div>
        ) : (
          <div className='flex flex-col items-end gap-5'>
            <div className='flex w-full items-end justify-between'>
              <div className='space-y-3'>
                <h1 className='text-3xl font-bold tracking-tight'>
                  Criar Solicitação de Troca
                </h1>
                <p className='text-sm'>
                  Selecione as cartas que você deseja <strong>receber</strong>
                </p>
                <span className='flex text-sm text-muted-foreground'>
                  Selecione um número igual de cartas às oferecidas
                </span>
              </div>
              <ItemsPerPageFilter
                defaultValue='10'
                value={String(itemsPerPage)}
                handleChange={handleItemsPerPageChange}
              />
            </div>
            <div className='flex w-fit text-sm text-muted-foreground'>
              {requestedCards.length} de {offeredCards.length} cartas
              selecionadas
            </div>
          </div>
        )}

        <div className='flex w-full'>
          {step === 0 ? (
            <div className='w-full'>
              <div className='mt-6 flex w-full flex-wrap justify-start gap-x-8 gap-y-12'>
                <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                  {myCards?.map(card => (
                    <Card key={card.id} className='flex flex-col gap-10 p-5'>
                      <Button
                        variant='ghost'
                        onClick={() => {
                          setSelectedCard(card)
                          setDialogOpen(true)
                        }}
                        className='h-[20rem] w-[14rem] p-0'
                      >
                        <MagicCard
                          className='h-full w-full'
                          src={card.imageUrl}
                        />
                      </Button>
                      <Button
                        variant={
                          !offeredCards.some(c => c.cardId === card.id)
                            ? 'secondary'
                            : 'destructive'
                        }
                        type='button'
                        onClick={() => handleSelectOfferedCard(card.id)}
                        disabled={isLoading}
                      >
                        {!offeredCards.some(c => c.cardId === card.id)
                          ? 'Selecionar'
                          : 'Remover'}
                      </Button>
                    </Card>
                  ))}
                  {myCards && <CardInfo card={selectedCard || myCards[0]} />}
                </Dialog>
              </div>
              <div className='mt-10 flex w-full justify-end'>
                <Button
                  onClick={handleProceedToNextStep}
                  type='button'
                  variant='outline'
                  className='text-base'
                >
                  Continuar
                </Button>
              </div>
            </div>
          ) : (
            <div className='w-full'>
              <div className='mt-6 flex w-full flex-wrap justify-start gap-x-8 gap-y-12'>
                <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                  {registeredCards?.list.map((card: CardTypeResponse) => (
                    <Card key={card.id} className='flex flex-col gap-10 p-5'>
                      <Button
                        variant='ghost'
                        onClick={() => {
                          setSelectedCard(card)
                          setDialogOpen(true)
                        }}
                        className='h-[20rem] w-[14rem] p-0'
                      >
                        <MagicCard
                          className='h-full w-full'
                          src={card.imageUrl}
                        />
                      </Button>
                      <Button
                        variant={
                          !requestedCards.some(c => c.cardId === card.id)
                            ? 'secondary'
                            : 'destructive'
                        }
                        type='button'
                        onClick={() => handleSelectRequestedCard(card.id)}
                        disabled={isLoading}
                      >
                        {!requestedCards.some(c => c.cardId === card.id)
                          ? 'Selecionar'
                          : 'Remover'}
                      </Button>
                    </Card>
                  ))}
                  {registeredCards && (
                    <CardInfo card={selectedCard || registeredCards.list[0]} />
                  )}
                </Dialog>
              </div>
              <div className='mt-6 flex w-full items-end justify-between'>
                <div />
                <Pagination
                  currentPage={currentPage}
                  onPageChange={updateCurrentPage}
                  hasMore={hasMoreCards}
                />
                <Dialog
                  open={confirmDialogOpen}
                  onOpenChange={setConfirmDialogOpen}
                >
                  <Button
                    type='button'
                    variant='outline'
                    className='text-base'
                    onClick={() => {
                      if (offeredCards.length === requestedCards.length) {
                        setConfirmDialogOpen(true)
                      } else {
                        toast.error(
                          'Por favor, selecione um número igual de cartas às oferecidas.'
                        )
                      }
                    }}
                    disabled={isLoading}
                  >
                    Finalizar
                  </Button>
                  <ConfirmationDialog
                    title='Deseja finalizar a solicitação de troca?'
                    description='Uma vez confirmado, não serão possíveis mais alterações.'
                    buttonText='Finalizar'
                    onConfirm={handleFinalizeRequest}
                  />
                </Dialog>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
