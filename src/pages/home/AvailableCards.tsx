import { SetStateAction, useContext, useState } from 'react'

import { toast } from 'react-hot-toast'

import { CardTypeResponse } from '@/types/card'
import { CardInfo } from '@/components/CardInfo'
import { Pagination } from '@/components/Pagination'
import { ItemsPerPageFilter } from '@/components/ItemsPerPageFilter'
import { Button } from '@/components/ui/Button'
import { Dialog } from '@/components/ui/Dialog'
import { MagicCard } from '@/components/MagicCard'
import { MainContext } from '@/contexts/MainProvider'

export function AvailableCards() {
  const { registeredCards, loadAllRegisteredCards, addMyDeck } =
    useContext(MainContext)

  const [focusedCard, setFocusedCard] = useState<CardTypeResponse | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(25)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleAddMyDeck = async (cardIds: string[]) => {
    try {
      setIsLoading(true)
      await addMyDeck(cardIds)
      setDialogOpen(false)
      setIsLoading(false)
      toast.success('Carta adquirida com sucesso!')
    } catch (error) {
      setIsLoading(false)
      toast.error(
        'Houve um problema ao concluir a solicitação. Tente novamente mais tarde.'
      )
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

  const hasMoreCards =
    registeredCards !== undefined ? registeredCards.more : true

  return (
    <>
      <div className='mt-4 flex flex-col gap-8 px-10 rounded-md'>
        <div className='mb-6'>
          <h1 className='mb-3 text-3xl font-bold tracking-tight'>
            Cartas Disponíveis
          </h1>
          <p className='text-base text-muted-foreground'>
            Veja todas as cartas disponíveis e comece suas trocas agora mesmo!
          </p>
        </div>
        <div className='flex w-full flex-col items-center'>
          <div className='mb-8 flex w-full items-center justify-end'>
            <ItemsPerPageFilter
              defaultValue='25'
              value={String(itemsPerPage)}
              handleChange={handleItemsPerPageChange}
            />
          </div>
          <div className='mb-10 mt-6 flex w-full flex-wrap justify-center gap-x-8 gap-y-12'>
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              {registeredCards?.list.map((card: CardTypeResponse) => (
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
                    shadow={true}
                  />
                </Button>
              ))}
              <CardInfo
                card={focusedCard || registeredCards?.list[0]}
                isLoading={isLoading}
                onRegisterCard={handleAddMyDeck}
              />
            </Dialog>
          </div>
          <Pagination
            currentPage={currentPage}
            onPageChange={updateCurrentPage}
            hasMore={hasMoreCards}
          />
        </div>
      </div>
    </>
  )
}
