import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/pt-br'
import { Repeat, Trash } from 'lucide-react'
import { useState } from 'react'

import { TradeType, TradeCardType } from '@/types/trade'

import { CardInfo } from './CardInfo'
import ConfirmationDialog from './ConfirmationDialog'
import { Button } from './ui/Button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from './ui/Card'
import { Dialog, DialogTrigger } from './ui/Dialog'
import { MagicCard } from './MagicCard'

dayjs.extend(relativeTime)
dayjs.locale('pt-br')

interface TradeCardProps {
  tradeInfo: TradeType
  isProfile?: boolean
  onDelete?: () => void
}

export function TradeCard({ tradeInfo, isProfile, onDelete }: TradeCardProps) {
  const [focusedCard, setFocusedCard] = useState<TradeCardType>()
  const [dialogOpen, setDialogOpen] = useState(false)
  const offeringCards = tradeInfo.tradeCards.filter(
    card => card.type === 'OFFERING'
  )
  const receivingCards = tradeInfo.tradeCards.filter(
    card => card.type === 'RECEIVING'
  )

  const handleCardClick = (card: TradeCardType) => {
    setFocusedCard(card)
    setDialogOpen(true)
  }

  return (
    <Card className='min-h-[36rem] min-w-[29.6rem] pt-7 shadow-lg'>
      <CardContent className='flex h-full w-full flex-col justify-between'>
        <div>
          <div className='flex w-full flex-nowrap items-center justify-between gap-16'>
            <div className='flex w-6/12'>
              <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                {offeringCards.map(card => (
                  <Button
                    key={card.id}
                    variant='ghost'
                    onClick={() => handleCardClick(card)}
                    className='-ml-[7rem] h-[12rem] w-[8rem] px-0 first:ml-0 hover:z-auto'
                  >
                    <MagicCard
                      key={card.cardId}
                      className='magic-card'
                      src={card.card.imageUrl}
                    />
                  </Button>
                ))}
                <CardInfo tradeCard={focusedCard} />
              </Dialog>
            </div>
            <div className='flex justify-center items-center'>
              <Repeat className='' />
            </div>
            <div className='flex w-6/12'>
              <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                {receivingCards.map(card => (
                  <Button
                    key={card.id}
                    variant='ghost'
                    onClick={() => handleCardClick(card)}
                    className='-ml-[7rem] h-[12rem] w-[8rem] px-0 first:ml-0'
                  >
                    <MagicCard
                      key={card.cardId}
                      className='magic-card'
                      src={card.card.imageUrl}
                    />
                  </Button>
                ))}
                <CardInfo tradeCard={focusedCard} />
              </Dialog>
            </div>
          </div>
          <CardHeader className='px-0'>
            <div className='flex w-full items-center justify-between'>
              <CardTitle className='text-left text-lg font-bold'>
                Aberta por {tradeInfo.user.name}
              </CardTitle>
              <span className='text-right text-sm text-muted-foreground'>
                {dayjs(tradeInfo.createdAt).fromNow()}
              </span>
            </div>
            <CardDescription className='text-left font-semibold text-foreground'>
              x{offeringCards.length} Cartas oferecidas
            </CardDescription>
            <div className='flex flex-col text-left'>
              {offeringCards.map(cardInfo => (
                <CardDescription
                  key={cardInfo.id}
                  className='flex items-center'
                >
                  <span className='ml-8 h-1 w-1 rounded-full bg-muted-foreground'></span>
                  <span className='ml-2'>{cardInfo.card.name}</span>
                </CardDescription>
              ))}
            </div>
            <CardDescription className='text-left font-semibold text-foreground'>
              x{receivingCards.length} Cartas a receber
            </CardDescription>
            <div className='flex flex-col text-left'>
              {receivingCards.map(cardInfo => (
                <CardDescription
                  key={cardInfo.id}
                  className='flex items-center'
                >
                  <span className='ml-8 h-1 w-1 rounded-full bg-muted-foreground'></span>
                  <span className='ml-2'>{cardInfo.card.name}</span>
                </CardDescription>
              ))}
            </div>
          </CardHeader>
        </div>
        {isProfile && (
          <Dialog>
            <DialogTrigger asChild>
              <Button
                type='button'
                variant='destructive'
                className='mt-5 flex gap-1'
              >
                <Trash className='h-4 w-4' />
                Excluir
              </Button>
            </DialogTrigger>
            <ConfirmationDialog
              title='Deseja excluir a solicitação de troca?'
              description='Esta ação é irreversível.'
              buttonText='Excluir'
              onConfirm={onDelete}
            />
          </Dialog>
        )}
      </CardContent>
    </Card>
  )
}
