import { z } from 'zod'
import axios from 'axios'

const envSchema = z.object({
  VITE_API_URL: z.string().url()
})

export const env = envSchema.parse(import.meta.env)

export const api = axios.create({
  baseURL: env.VITE_API_URL
})
