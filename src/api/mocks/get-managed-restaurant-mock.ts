import { http, HttpResponse } from 'msw'

import type { GetEstablishmentResponse } from '../get-managed-establishment'

export const getManagedRestaurantMock = http.get<
  never,
  never,
  GetEstablishmentResponse
>('/managed-restaurant', () => {
  return HttpResponse.json({
    id: 'custom-restaurant-id',
    name: 'Pizza Shop',
    description: 'Custom restaurant description.',
    managerId: 'custom-user-id',
    createdAt: new Date(),
    updatedAt: null,
  })
})
