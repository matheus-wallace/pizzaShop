import { api } from '@/lib/axios'

export interface SignInBody {
  email: string
}

export async function signin({ email }: SignInBody) {
  api.post('authenticate', { email })
}
