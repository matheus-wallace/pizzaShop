import { useQuery } from '@tanstack/react-query'
import { subDays } from 'date-fns'
import { Loader2 } from 'lucide-react'
import { useMemo, useState } from 'react'
import type { DateRange } from 'react-day-picker'
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts'
import colors from 'tailwindcss/colors'

import { getDailyRevenueInPeriod } from '@/api/get-daily-revenue-in-period'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card'
import { DateRangePicker } from './ui/date-range-picker'
import { Label } from './ui/label'
const RevenueChart = () => {
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: subDays(new Date(), 7),
    to: new Date(),
  })

  const {
    data: dailyRevenueInPeriod,
    isError,
    error,
    isFetching,
  } = useQuery({
    queryKey: ['metrics', 'daily-revenue-in-period', dateRange],
    queryFn: () =>
      getDailyRevenueInPeriod({
        from: dateRange?.from,
        to: dateRange?.to,
      }),
    refetchOnWindowFocus: false,
    retry: false,
  })

  const chartData = useMemo(() => {
    return (
      dailyRevenueInPeriod?.map((chartItem) => {
        return {
          date: chartItem.date,
          receipt: chartItem.receipt / 100,
        }
      }) ?? []
    )
  }, [dailyRevenueInPeriod])
  return (
    <Card className="bg-background col-span-6">
      <CardHeader className="flex items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Revenue in the period
          </CardTitle>
          <CardDescription>Daily revenue in the period</CardDescription>
        </div>
        <div className="flex items-center gap-3">
          <Label>Period</Label>
          <DateRangePicker date={dateRange} onDateChange={setDateRange} />
        </div>
      </CardHeader>
      {isFetching && (
        <div className="flex h-[240px] w-full items-center justify-center">
          <Loader2 className="text-muted-foreground h-6 w-6 animate-spin" />
        </div>
      )}
      {isError && !isFetching && (
        <div className="flex h-[240px] w-full items-center justify-center">
          <span className="text-muted-foreground">
            {error instanceof Error
              ? error.message
              : 'The period must be 7 days or less'}
          </span>
        </div>
      )}
      {chartData && chartData.length === 0 && !isFetching && !isError && (
        <div className="flex h-[240px] w-full items-center justify-center">
          <span className="text-muted-foreground">
            No revenue data available for the selected period.
          </span>
        </div>
      )}
      {chartData && !isFetching && !isError && chartData.length > 0 && (
        <CardContent>
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={chartData} style={{ fontSize: 12 }}>
              <XAxis dataKey="date" axisLine={false} tickLine={false} dy={16} />
              <YAxis
                stroke="#888"
                axisLine={false}
                tickLine={false}
                width={80}
                tickFormatter={(value: number) =>
                  value.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })
                }
              />
              <CartesianGrid vertical={false} className="stroke-muted" />
              <Line
                stroke={colors.violet[500]}
                type="linear"
                strokeWidth={2}
                dataKey="receipt"
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      )}
    </Card>
  )
}

export default RevenueChart
