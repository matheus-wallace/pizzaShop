import { Utensils } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

const DayOrdersAmountCard = () => {
  return (
    <Card className="gap-2">
      <CardHeader className="flex items-center justify-between space-y-0">
        <CardTitle className="text-base font-bold">Orders (day)</CardTitle>
        <Utensils className="text-muted-foreground h-4 w-4" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">12</span>
        <p className="text-muted-foreground text-xs">
          <span className="text-rose-500 dark:text-rose-400">-4%</span>
          compared to yesterday
        </p>
      </CardContent>
    </Card>
  )
}

export default DayOrdersAmountCard
