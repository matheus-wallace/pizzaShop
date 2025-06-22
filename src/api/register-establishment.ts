import { api } from '@/lib/axios'

export interface RegisterEstablishmentBody {
  restaurantName: string
  managerName: string
  email: string
  phone: string
}

export async function registerEstablishment({
  restaurantName,
  managerName,
  email,
  phone,
}: RegisterEstablishmentBody) {
  return api.post('/restaurants', { restaurantName, managerName, email, phone })
}
