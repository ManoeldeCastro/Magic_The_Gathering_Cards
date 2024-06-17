import {
  CircleUserRound,
  LogOut,
  Repeat,
  SquareUser,
  WalletCards
} from 'lucide-react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { AuthContext } from '@/contexts/AuthProvider'

import { Button } from './ui/Button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from './ui/DropdownMenu'
import { Skeleton } from './ui/Skeleton'

interface UserMenuProps {
  onLogout: () => void
}

export function UserMenu({ onLogout }: UserMenuProps) {
  const { user, isLoading } = useContext(AuthContext)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='outline'
          className='flex select-none items-center rounded-full'
        >
          <SquareUser className='h-5 w-5' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' className='w-56'>
        <DropdownMenuLabel className='flex flex-col'>
          {isLoading ? (
            <div>
              <Skeleton className='h-4 w-24' />
              <Skeleton className='h-3 w-32' />
            </div>
          ) : (
            <>
              <span>{user?.name}</span>
              <span className='text-xs font-normal text-muted-foreground'>
                {user?.email}
              </span>
            </>
          )}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Button variant='ghost' className='w-full'>
            <Link
              to='/user-profile'
              className='flex w-full items-center justify-start'
            >
              <CircleUserRound className='mr-2 h-4 w-4' />
              Perfil
            </Link>
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Button
            variant='ghost'
            className='flex w-full items-center justify-start'
          >
            <Link
              to={'/available-cards'}
              className='flex w-full items-center justify-start'
            >
              <WalletCards className='mr-2 h-4 w-4' />
              Suas cartas
            </Link>
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Button
            variant='ghost'
            className='flex w-full items-center justify-start'
          >
            <Link
              to={'/trade-center'}
              className='flex w-full items-center justify-start'
            >
              <Repeat className='mr-2 h-4 w-4' />
              Trocas
            </Link>
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem
          asChild
          className='flex items-center text-rose-500 dark:text-rose-400'
        >
          <Button
            onClick={onLogout}
            variant='ghost'
            className='w-full cursor-pointer'
          >
            <div className='flex w-full items-center justify-start'>
              <LogOut className='mr-2 h-4 w-4' />
              Sair
            </div>
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
