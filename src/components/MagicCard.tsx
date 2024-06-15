import { cx } from 'class-variance-authority'
import { Button } from './ui/Button'

interface MagicCardProps {
  src: string
  className?: string
  shadow?: boolean
}

export function MagicCard({ src, className, shadow = false }: MagicCardProps) {
  return (
    <Button
      variant='ghost'
      className={cx(
        className,
        'group relative z-0 p-0 transition duration-200 ease-in-out rounded-md'
      )}
      asChild
    >
      <div
        className={cx(
          'relative magic-card-container rounded-md',
          shadow && 'shadow-lg'
        )}
      >
        <img
          src={src}
          alt='Magic Card'
          className='magic-card transition-transform duration-200 rounded-md shadow ease-in-out group-hover:scale-105 group-hover:-translate-y-2'
        />
      </div>
    </Button>
  )
}
