import { Button } from '@/components/ui/Button'
import { Link } from 'react-router-dom'
import ImgLogo from '../../assets/magic-logo.svg'

export function NotFound() {
  return (
    <div className='flex h-screen flex-col items-center justify-center gap-2 bg-black text-secondary'>
      <img className='mb-6 w-[20rem]' src={ImgLogo} alt='' />
      <h1 className='text-3xl font-bold'>Página não encontrada</h1>
      <Button variant={'link'} className='text-secondary'>
        <Link to={'/'} className=''>
          Ir para a página principal
        </Link>
      </Button>
    </div>
  )
}
