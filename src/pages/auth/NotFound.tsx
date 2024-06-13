import { Button } from '@/components/ui/Button'
import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div className='flex h-screen flex-col items-center justify-center gap-2 bg-black text-secondary'>
      <img className='mb-6 w-[20rem]' src={'https://images.ctfassets.net/s5n2t79q9icq/3dB5uyWzUH95O1ZPBNNUX5/6cff7c65a809285755ea24b164b6ac65/magic-logo.png?fm=webp'} alt='' />
      <h1 className='text-3xl font-bold'>Página não encontrada</h1>
      <Button variant={'link'} className='text-secondary'>
        <Link to={'/'} className=''>
          Ir para a página principal
        </Link>
      </Button>
    </div>
  )
}
