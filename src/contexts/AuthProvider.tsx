import { createContext, useCallback, useEffect, useState } from 'react'
import { api } from '@/lib/axios'
import { CardTypeResponse } from '@/types/card'
import {
  getFromLocalStorage,
  removeFromLocalStorage,
  saveToLocalStorage
} from '@/utils/helpers'

// Define interfaces para o usuário e tipos de entrada
interface User {
  id: string
  name: string
  email: string
  cards: CardTypeResponse[]
}

interface LoginInput {
  email: string
  password: string
}

interface RegisterInput {
  name: string
  email: string
  password: string
}

interface GetProfileResponse {
  id: string
  name: string
  email: string
  cards: CardTypeResponse[]
}

interface AuthContextType {
  isAuthenticated: boolean
  isLoading: boolean
  user: User | null
  login: (data: LoginInput) => Promise<void>
  register: (data: RegisterInput) => Promise<void>
  getProfile: () => Promise<void>
  logOut: () => void
}

interface AuthProviderProps {
  children: React.ReactNode
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  // Função de login
  const login = useCallback(async ({ email, password }: LoginInput) => {
    try {
      const response = await api.post('/login', { email, password })
      saveToLocalStorage('token', response.data.token)
    } catch (error) {
      console.error('Erro ao fazer login:', error)
      throw error
    }
  }, [])

  // Função de registro
  const register = useCallback(
    async ({ name, email, password }: RegisterInput) => {
      try {
        await api.post('/register', { name, email, password })
      } catch (error) {
        console.error('Erro ao registrar:', error)
      }
    },
    []
  )

  // Função para obter o perfil do usuário
  const getProfile = useCallback(async () => {
    const token = getFromLocalStorage('token')
    setIsLoading(true)

    if (token) {
      try {
        const response = await api.get<GetProfileResponse>('/me', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        setUser(response.data)
      } catch (error) {
        console.error('Erro ao buscar perfil:', error)
        setUser(null)
      } finally {
        setIsLoading(false)
      }
    } else {
      setUser(null)
      setIsLoading(false)
    }
  }, [])

  // Função para remover o perfil do usuário
  const logOut = useCallback(() => {
    removeFromLocalStorage('token')
    setUser(null)
  }, [])

  // Obter o perfil do usuário ao montar o componente
  useEffect(() => {
    getProfile()
  }, [getProfile])

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: Boolean(user),
        isLoading,
        user,
        login,
        register,
        getProfile,
        logOut
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
