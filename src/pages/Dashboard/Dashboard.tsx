import { Helmet } from 'react-helmet-async'

import DayOrdersAmountCard from '@/components/DayOrdersAmountCard'
import MonthCanceledOrdersAmount from '@/components/MonthCanceledOrdersAmount'
import MonthRevenueCard from '@/components/MonthRevenueCard'
import OrderMonthAmountCard from '@/components/OrderMonthAmountCard'
import PopularProductsChart from '@/components/PoupularProductsChats'
import RevenueChart from '@/components/RevenueChart'

const Dashboard = () => {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <div className="grid grid-cols-4 gap-4">
          <MonthRevenueCard />
          <OrderMonthAmountCard />
          <DayOrdersAmountCard />
          <MonthCanceledOrdersAmount />
        </div>
        <div className="grid grid-cols-9 gap-4">
          <RevenueChart />
          <PopularProductsChart />
        </div>
      </div>
    </>
  )
}

export default Dashboard
