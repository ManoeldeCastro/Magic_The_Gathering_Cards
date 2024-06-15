import { useContext, useEffect, useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'

import { TradeCard } from '@/components/TradeCard'
import { Pagination } from '@/components/Pagination'
import { ItemsPerPageFilter } from '@/components/ItemsPerPageFilter'
import { Button } from '@/components/ui/Button'
import { MainContext } from '@/contexts/MainProvider'
import { AuthContext } from '@/contexts/AuthProvider'

export function TradeCenter() {
  const navigate = useNavigate()
  const { myCards, openTrades, isLoadingOpenTrades, loadOpenTrades } =
    useContext(MainContext)
  const { isAuthenticated } = useContext(AuthContext)

  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)

  const handleItemsPerPageChange = useCallback(
    async (newRpp: string) => {
      try {
        await loadOpenTrades({ rpp: newRpp, page: String(currentPage) })
        setItemsPerPage(Number(newRpp))
      } catch (error) {
        toast.error(
          'Erro ao buscar solicitações de negociação abertas. Por favor, tente novamente mais tarde.'
        )
      }
    },
    [loadOpenTrades, currentPage]
  )

  const updateCurrentPage = useCallback(
    async (newPage: number) => {
      try {
        await loadOpenTrades({
          rpp: String(itemsPerPage),
          page: String(newPage)
        })
        setCurrentPage(newPage)
      } catch (error) {
        toast.error(
          'Erro ao buscar solicitações de negociação abertas. Por favor, tente novamente mais tarde.'
        )
      }
    },
    [loadOpenTrades, itemsPerPage]
  )

  const handleRequestTradeClick = () => {
    if (myCards && myCards.length > 0) {
      navigate('/trade-request')
    } else {
      toast.error('Você ainda não adquiriu nenhum cartão para negociação')
    }
  }

  useEffect(() => {
    loadOpenTrades({ rpp: '10', page: '1' })
  }, [loadOpenTrades])

  const hasMoreTrades = openTrades ? openTrades.more : true

  return (
    <>
      <div className='mt-4 flex flex-col gap-8 px-10'>
        <div className='mb-10'>
          <h1 className='mb-3 text-3xl font-bold tracking-tight'>
            Trocas em andamento
          </h1>
          <p className='text-base text-muted-foreground'>
            Veja todas as trocas abertas e inicie suas trocas agora!
          </p>
        </div>
        <div className='flex w-full flex-wrap justify-center'>
          <div className='mb-8 flex w-full items-center justify-between'>
            <ItemsPerPageFilter
              defaultValue='10'
              value={String(itemsPerPage)}
              handleChange={handleItemsPerPageChange}
            />
            {isAuthenticated && (
              <Button type='button' onClick={handleRequestTradeClick}>
                Iniciar troca
              </Button>
            )}
          </div>
          <div className='mb-10 flex w-full flex-wrap justify-center gap-x-8 gap-y-12'>
            {openTrades &&
            openTrades.list.length > 0 &&
            !isLoadingOpenTrades ? (
              openTrades.list.map(trade => (
                <TradeCard key={trade.id} tradeInfo={trade} isProfile={false} />
              ))
            ) : isLoadingOpenTrades ? (
              <p>Carregando...</p>
            ) : (
              <p className='col-span-full text-center'>
                Nenhuma troca disponível
              </p>)}
          </div>
          <Pagination
            currentPage={currentPage}
            onPageChange={updateCurrentPage}
            hasMore={hasMoreTrades}
          />
        </div>
      </div>
    </>
  )
}
