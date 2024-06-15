import { Button } from './ui/Button'
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from './ui/Dialog'

interface ConfirmationDialogProps {
  title: string
  description: string
  buttonText: string
  onConfirm?: () => void
}

export default function ConfirmationDialog({
  title,
  description,
  buttonText,
  onConfirm
}: ConfirmationDialogProps) {
  return (
    <DialogContent className=' sm:w-1/2'>
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      <DialogFooter className='sm:justify-start'>
        <DialogClose asChild>
          <Button onClick={onConfirm} type='button' variant='secondary'>
            {buttonText}
          </Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  )
}
