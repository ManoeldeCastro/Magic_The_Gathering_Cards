import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'

import { AuthContext } from '@/contexts/AuthProvider'
import ImgLogo from '../assets/magic-logo.svg'
import { Button } from './ui/Button'
import { Skeleton } from './ui/Skeleton'
import { UserMenu } from './UserMenu'
import { NavigationLink } from './NavigationLink'
import { LogIn, Repeat, UserPlus, WalletCards } from 'lucide-react'

export function Header() {
  const navigate = useNavigate()
  const { user, isLoading, logOut } = useContext(AuthContext)

  function handleLogout() {
    logOut()
    navigate('/')
  }

  return (
    <div className='w-full border-b bg-header z-20'>
      <div className='flex justify-between h-16 w-full items-center gap-6 px-6'>
        <Button variant='link' className='hidden md:inline-flex'>
          <Link to='/'>
            <img className='w-[10rem]' src={ImgLogo} alt='Logo' />
          </Link>
        </Button>

        <div className='flex gap-6'>
          <Button
            variant='outline'
            className='flex select-none items-center rounded-full'
          >
            <NavigationLink
              to='/available-cards'
              title='Ir para página de cartas'
            >
              <WalletCards />
            </NavigationLink>
          </Button>
          <Button
            variant='outline'
            className='flex select-none items-center rounded-full'
          >
            <NavigationLink to='/trade-center' title='Ir para página de trocas'>
              <Repeat />
            </NavigationLink>
          </Button>
        </div>

        <div className='flex items-center gap-3'>
          {!isLoading && !user ? (
            <div className='flex items-center gap-3'>
              <Button variant='link' className='p-0 text-secondary'>
                <Link to='/register' title='Criar conta'>
                  <UserPlus />
                </Link>
              </Button>
              <span className='text-white'>/</span>
              <Button variant='link' className='p-0 text-secondary'>
                <Link to='/login' title='Entre na sua conta'>
                  <LogIn />
                </Link>
              </Button>
            </div>
          ) : (
            isLoading && null
          )}
          {!isLoading && user ? (
            <UserMenu onLogout={handleLogout} />
          ) : (
            isLoading && <Skeleton className='h-[40px] w-[54px] bg-muted' />
          )}
        </div>
      </div>
    </div>
  )
}
