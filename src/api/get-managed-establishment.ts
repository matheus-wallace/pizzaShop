import { api } from '@/lib/axios'

export interface GetEstablishmentResponse {
  id: string
  name: string
  createdAt: Date | null
  updatedAt: Date | null
  description: string | null
  managerId: string | null
}

export async function getEstablishment() {
  const response = await api.get<GetEstablishmentResponse>(
    '/managed-restaurant',
  )
  return response.data
}
