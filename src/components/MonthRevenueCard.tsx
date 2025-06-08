import { useQuery } from '@tanstack/react-query'
import { DollarSign } from 'lucide-react'

import { getMonthRevenue } from '@/api/get-month-revenue'

import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

const MonthRevenueCard = () => {
  const { data: monthRevenue } = useQuery({
    queryKey: ['metrics', 'month-revenue'],
    queryFn: getMonthRevenue,
  })
  return (
    <Card className="gap-2">
      <CardHeader className="flex items-center justify-between space-y-0">
        <CardTitle className="text-base font-bold">
          Total Revenue (Month)
        </CardTitle>
        <DollarSign className="text-muted-foreground h-4 w-4" />
      </CardHeader>
      <CardContent className="space-y-1">
        {monthRevenue && (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {(monthRevenue.receipt / 100).toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
              })}
            </span>
            <p className="text-muted-foreground text-xs">
              {monthRevenue.diffFromLastMonth >= 0 ? (
                <>
                  <span className="text-emerald-500 dark:text-emerald-400">
                    +{monthRevenue.diffFromLastMonth}%
                  </span>{' '}
                  compered to last month
                </>
              ) : (
                <>
                  <span className="text-rose-500 dark:text-rose-400">
                    {monthRevenue.diffFromLastMonth}%
                  </span>{' '}
                  compered to last month
                </>
              )}
            </p>
          </>
        )}
      </CardContent>
    </Card>
  )
}

export default MonthRevenueCard
