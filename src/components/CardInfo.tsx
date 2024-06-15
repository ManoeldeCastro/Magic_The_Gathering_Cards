import { useContext, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { AuthContext } from '@/contexts/AuthProvider'
import { Button } from './ui/Button'
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from './ui/Dialog'
import { Separator } from './ui/Separator'
import { MagicCard } from './MagicCard'
import { TradeCardType } from '@/types/trade'
import { CardTypeResponse } from '@/types/card'

interface CardInfoProps {
  card?: CardTypeResponse
  tradeCard?: TradeCardType
  isLoading?: boolean
  onRegisterCard?: (cardIds: string[]) => Promise<void>
}

export function CardInfo({
  card,
  tradeCard,
  isLoading,
  onRegisterCard
}: CardInfoProps) {
  const { isAuthenticated } = useContext(AuthContext)
  const { t, i18n } = useTranslation()
  const [isTranslated, setIsTranslated] = useState(false)

  const imageUrl = card?.imageUrl || tradeCard?.card.imageUrl || ''
  const originalName = card?.name || tradeCard?.card.name || ''
  const originalDescription =
    card?.description || tradeCard?.card.description || ''

  const translatedName = t(originalName)
  const translatedDescription = t(originalDescription)

  const name = isTranslated ? translatedName : originalName
  const description = isTranslated ? translatedDescription : originalDescription

  const handleToggleTranslation = () => {
    setIsTranslated(!isTranslated)
    const newLang = i18n.language === 'en' ? 'pt' : 'en'
    i18n.changeLanguage(newLang)
  }

  return (
    <DialogContent className='sm:w-40 sm:min-w-[40rem] rounded-md'>
      <div className='flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6'>
        <MagicCard
          className='h-[20rem] w-[14rem] mx-auto sm:mx-0'
          src={imageUrl}
        />
        <Separator orientation='vertical' className='hidden sm:block' />
        <div className='flex flex-col items-center justify-between w-full'>
          <DialogHeader>
            <DialogTitle className='flex flex-col items-center'>
              {name}
            </DialogTitle>
            <DialogDescription className='flex flex-col items-center mt-4 text-lg'>
              {description}
            </DialogDescription>
          </DialogHeader>
          <div className='w-full flex gap-2'>
            {card && isAuthenticated && (
              <Button
                type='button'
                onClick={() => onRegisterCard && onRegisterCard([card.id])}
                className='w-full mt-4'
                disabled={isLoading}
              >
                Adquirir
              </Button>
            )}
            <Button
              variant='outline'
              onClick={handleToggleTranslation}
              className='w-full mt-4'
            >
              {isTranslated ? 'Mostrar Original' : 'Traduzir'}
            </Button>
          </div>
        </div>
      </div>
    </DialogContent>
  )
}
