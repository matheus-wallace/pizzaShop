import { Utensils } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

const OrderMonthAmountCard = () => {
  return (
    <Card className="gap-2">
      <CardHeader className="flex items-center justify-between space-y-0">
        <CardTitle className="text-base font-bold">Orders (Month)</CardTitle>
        <Utensils className="text-muted-foreground h-4 w-4" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">246</span>
        <p className="text-muted-foreground text-xs">
          <span className="text-emerald-500 dark:text-emerald-400">+6%</span>
          compared to last month
        </p>
      </CardContent>
    </Card>
  )
}

export default OrderMonthAmountCard
