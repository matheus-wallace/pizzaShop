import { DollarSign } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

const MonthRevenueCard = () => {
  return (
    <Card className="gap-2">
      <CardHeader className="flex items-center justify-between space-y-0">
        <CardTitle className="text-base font-bold">
          Total Revenue (Month)
        </CardTitle>
        <DollarSign className="text-muted-foreground h-4 w-4" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">$ 1255,00</span>
        <p className="text-muted-foreground text-xs">
          <span className="text-emerald-500 dark:text-emerald-400">+2%</span>
          compared to last month
        </p>
      </CardContent>
    </Card>
  )
}

export default MonthRevenueCard
