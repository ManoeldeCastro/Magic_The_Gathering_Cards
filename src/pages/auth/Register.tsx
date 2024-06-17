import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import toast, { Toaster } from 'react-hot-toast'

import ImgLogo from '../../assets/magic-black.svg'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Label } from '@/components/ui/Label'
import { ArrowLeft } from 'lucide-react'
import { AuthContext } from '@/contexts/AuthProvider'

// Define a schema for the registration form
const registerFormSchema = z.object({
  name: z.string().nonempty('Nome é obrigatório'),
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'Senha deve ter no mínimo 6 caracteres')
})

type RegisterForm = z.infer<typeof registerFormSchema>

export function Register() {
  const navigate = useNavigate()
  const { register: registerUser } = useContext(AuthContext)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<RegisterForm>()

  // Handle form submission
  const handleRegister = async (data: RegisterForm) => {
    try {
      await registerUser(data)
      navigate(`/login?email=${data.email}`)
    } catch (error: any) {
      handleRegisterError(error)
    }
  }

  // Handle registration errors
  const handleRegisterError = (error: any) => {
    if (error.response?.data?.message === 'User already exists') {
      toast.error('Email já cadastrado.')
    } else {
      toast.error(
        'Ocorreu algum problema ao efetuar o cadastro, tente novamente mais tarde.'
      )
    }
  }

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
            <img className='w-[18rem] m-auto' src={ImgLogo} alt='Logo' />
            <h1 className='text-2xl font-semibold tracking-tight'>
              Crie sua conta
            </h1>
            <p className='text-base font-bold text-muted-foreground'>
              Registre-se e comece a montar o seu deck
            </p>
          </div>

          <form onSubmit={handleSubmit(handleRegister)}>
            <div className='space-y-2'>
              <Label htmlFor='name'>Seu nome</Label>
              <Input id='name' type='text' {...register('name')} />
            </div>

            <div className='space-y-2'>
              <Label htmlFor='email'>Seu e-mail</Label>
              <Input id='email' type='email' {...register('email')} />
            </div>

            <div className='space-y-2'>
              <Label htmlFor='password'>Sua senha</Label>
              <Input id='password' type='password' {...register('password')} />
            </div>

            <Button
              disabled={isSubmitting}
              className='w-full my-2'
              type='submit'
            >
              Cadastrar
            </Button>
          </form>
        </div>
      </div>
      <Toaster />
    </>
  )
}
