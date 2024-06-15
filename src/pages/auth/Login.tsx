import { useNavigate, useSearchParams } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import toast, { Toaster } from 'react-hot-toast';

import ImgLogo from '../../assets/magic-black.svg';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { AuthContext } from '@/contexts/AuthProvider';
import { ArrowLeft } from 'lucide-react';
import { NavigationLink } from '@/components/NavigationLink';

// Define a schema for the login form
const loginFormSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'Senha deve ter no mínimo 6 caracteres'),
});

type LoginForm = z.infer<typeof loginFormSchema>;

export function Login() {
  const navigate = useNavigate();
  const { login, getProfile } = useContext(AuthContext);
  const [searchParams, setSearchParams] = useSearchParams();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginForm>({
    defaultValues: {
      email: searchParams.get('email') ?? '',
    },
  });

  // Show success message if redirected from registration
  useEffect(() => {
    const emailParam = searchParams.get('email');
    if (emailParam) {
      toast.success('Cadastro efetuado com sucesso!');
      // Remove the email parameter to prevent the message from showing again
      searchParams.delete('email');
      setSearchParams(searchParams, { replace: true });
    }
  }, [searchParams, setSearchParams]);

  // Handle form submission
  const handleLogin = async (data: LoginForm) => {
    try {
      await login(data);
      await getProfile();
      toast.success('Login efetuado com sucesso!');
      navigate('/', { replace: true });
    } catch (error: any) {
      handleLoginError(error);
    }
  };

  // Handle login errors
  const handleLoginError = (error: any) => {
    console.error(error);
    if (error.response?.data?.message === 'Incorrect password/email') {
      toast.error('Credenciais inválidas');
    } else {
      toast.error('Ocorreu algum problema ao efetuar o login, tente novamente mais tarde.');
    }
  };

  return (
    <>
      <div className="p-8">
        <div>
        <Button variant="link" className="absolute left-8 top-8">
            <NavigationLink to="/">
              <ArrowLeft />
            </NavigationLink>
          </Button>
          <Button variant="link" asChild className="absolute right-8 top-8">
            <NavigationLink to="/register">Registre-se</NavigationLink>
          </Button>
        </div>

        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <img className="w-[12rem]" src={ImgLogo} alt="Logo" />
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar sua conta
            </h1>
            <p className="text-sm text-muted-foreground">
              Gerencie seu deck e faça suas trocas
            </p>
          </div>

          <form onSubmit={handleSubmit(handleLogin)} className='flex flex-col gap-2'>
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                type="email"
                placeholder="Digite seu e-mail"
                {...register('email')}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                placeholder="Digite sua senha"
                {...register('password')}
              />
            </div>
            <div className="space-y-2">
            <Button disabled={isSubmitting} className="w-full" type="submit">
              Entrar
            </Button>
            </div>
          </form>
        </div>
      </div>
      <Toaster />
    </>
  );
}
