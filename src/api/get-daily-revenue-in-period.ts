import { api } from '@/lib/axios'

export interface GetDailyRevenueInPeriodQuery {
  from?: Date
  to?: Date
}

export type GetDailyRevenueInPeriodResponse = {
  date: string
  receipt: number
}[]

export async function getDailyRevenueInPeriod({
  from,
  to,
}: GetDailyRevenueInPeriodQuery) {
  try {
    const response = await api.get<GetDailyRevenueInPeriodResponse>(
      '/metrics/daily-receipt-in-period',
      {
        params: { from, to },
      },
    )
    return response.data
  } catch (error: any) {
    throw new Error('The period must be 7 days or less')
  }
}
