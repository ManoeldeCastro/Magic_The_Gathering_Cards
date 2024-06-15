import { useContext, useEffect } from 'react'

import { Link } from 'react-router-dom'

import { TradeCard } from '@/components/TradeCard'
import { Button } from '@/components/ui/Button'
import { MainContext } from '@/contexts/MainProvider'

import homeImg from '../../assets/main-cards.svg'

export function Main() {
  const { openTrades, isLoadingOpenTrades, loadOpenTrades } =
    useContext(MainContext)

  useEffect(() => {
    loadOpenTrades({ rpp: '9', page: '1' })
  }, [loadOpenTrades])

  return (
    <>
      <div className='mt-4 flex flex-wrap items-center justify-evenly gap-8 px-10'>
        <div className='flex flex-col items-start'>
          <h1 className='text-5xl font-bold tracking-tight'>
            Bem vindo ao Magic: The Gathering - Cards
          </h1>
          <p className='ml-[3px] text-lg font-semibold tracking-tight text-muted-foreground'>
            Construa um deck invencível
          </p>
        </div>
        <img className='w-[50rem]' src={homeImg} alt='Home Image' />
      </div>

      <div className='bg-gray-100 py-16'>
        <div className='container mx-auto px-10'>
          <div className='mb-10 text-center'>
            <h1 className='mb-3 text-3xl font-bold tracking-tight'>
              Trocas em andamento
            </h1>
            <p className='text-base text-gray-600'>
              Não fique de fora faça trocas e melhore seu deck
            </p>
            <Button variant='outline' asChild className='mt-7 text-base'>
              <Link to='/trade-center'>Ir para página de trocas</Link>
            </Button>
          </div>

          <div className='mb-10 mt-10 flex w-full flex-wrap justify-center gap-x-8 gap-y-12'>
            {openTrades &&
            openTrades.list.length > 0 &&
            !isLoadingOpenTrades ? (
              openTrades.list.map(trade => (
                <TradeCard key={trade.id} tradeInfo={trade} />
              ))
            ) : isLoadingOpenTrades ? (
              <p className='col-span-full text-center'>Carregando...</p>
            ) : (
              <p className='col-span-full text-center'>
                Nenhuma troca disponível
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
