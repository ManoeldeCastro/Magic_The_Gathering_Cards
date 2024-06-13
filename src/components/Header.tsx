import { Link } from 'react-router-dom'
import { Button } from './ui/Button'

export function Header() {
  return (
    <div className='fixed w-full border-b bg-header z-20'>
      <div className='flex justify-between h-12 w-full items-center gap-6 px-2'>
        <Button variant='link'>
          <img className='w-[8rem]' src={'https://images.ctfassets.net/s5n2t79q9icq/3dB5uyWzUH95O1ZPBNNUX5/6cff7c65a809285755ea24b164b6ac65/magic-logo.png?fm=webp'} alt='Logo' />
        </Button>
        {/* TODO: REACT router */}
        <div className='flex gap-6'>
          <div className='flex items-center gap-3'>
            <Button variant={'link'} className='p-0 text-secondary'>
              Troque suas cartas
            </Button>
            <span className='text-secondary'>{' / '}</span>
            <Button variant={'link'} className='p-0 text-secondary'>
              Conheça as cartas
            </Button>
          </div>
        </div>

        <div className='flex items-center gap-3'>
          <div className='flex items-center gap-1'>
            <Button variant={'link'} className='p-0 text-secondary'>
              <Link to='/login'>Login</Link>
            </Button>
            <span className='text-secondary'>{' / '}</span>
            <Button variant={'link'} className='p-0 text-secondary'>
              <Link to='/register'>Registre-se</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
