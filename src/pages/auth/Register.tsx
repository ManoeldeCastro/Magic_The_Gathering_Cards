import { Link } from 'react-router-dom'
import ImgLogo from '../../assets/magic-black.svg'

import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Label } from '@/components/ui/Label'
import { ArrowLeft } from 'lucide-react'

export function Register() {
  return (
    <>
      <div className='p-8'>
        <div>
          <Button variant='link' className='absolute left-8 top-8'>
            <Link to='/'>
              <ArrowLeft />
            </Link>
          </Button>
          <Button variant='link' asChild className='absolute right-8 top-8'>
            <Link to='/login'>Login</Link>
          </Button>
        </div>

        <div className='flex w-[350px] flex-col justify-center gap-6'>
          <div className='flex flex-col gap-2 text-center'>
            <img className="w-[12rem]" src={ImgLogo} alt="" />
            <h1 className='text-2xl font-semibold tracking-tight'>Crie sua conta</h1>
            <p className='text-sm text-muted-foreground'>Registre-se e comece a montar o seu deck</p>
          </div>

          <form>
            <div className='space-y-2'>
              <Label htmlFor='name'>Seu nome</Label>
              <Input id='name' type='name' />
            </div>

            <div className='space-y-2'>
              <Label htmlFor='email'>E-mail</Label>
              <Input id='email' type='email' placeholder='Seu e-mail' />
            </div>

            <div className='space-y-2'>
              <Label htmlFor='password'>Senha</Label>
              <Input id='password' type='password' placeholder='Sua senha' />
            </div>

            <Button disabled className='w-full' type='submit'>
              Login
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
