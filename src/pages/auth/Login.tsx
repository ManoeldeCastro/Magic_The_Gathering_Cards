import { Link, useNavigate } from 'react-router-dom'

import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Label } from '@/components/ui/Label'
import { ArrowLeft } from 'lucide-react'

export function Login() {
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
            <Link to='/register'>Registre-se</Link>
          </Button>
        </div>

        <div className='flex w-[350px] flex-col justify-center gap-6'>
          <div className='flex flex-col gap-2 text-center'>
            <h1 className='text-2xl font-semibold tracking-tight'>Acessar sua conta</h1>
            <p className='text-sm text-muted-foreground'>Gerencie seu deck e faça suas trocas</p>
          </div>

          <form>
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
