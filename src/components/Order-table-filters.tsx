import { Search, X } from 'lucide-react'

import { Button } from './ui/button'
import { Input } from './ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'

const OrderTableFilters = () => {
  return (
    <form className="flex items-center gap-2">
      <span className="text-sm font-semibold">Filters:</span>
      <Input placeholder="Order id" className="h-8 w-[320px]" />
      <Input placeholder="Customer name" className="h-8 w-auto" />
      <Select defaultValue="all">
        <SelectTrigger className="h-8 w-[180px]">
          <SelectValue />
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="canceled">Canceled</SelectItem>
            <SelectItem value="processing">Processing</SelectItem>
            <SelectItem value="delivering">Delivering</SelectItem>
            <SelectItem value="delivered">Delivered</SelectItem>
          </SelectContent>
        </SelectTrigger>
      </Select>
      <Button type="submit" variant={'secondary'} size={'xs'}>
        <Search className="h-4 w-4" />
        Filter results
      </Button>
      <Button type="button" variant={'outline'} size={'xs'}>
        <X className="h-4 w-4" />
        Remove filters
      </Button>
    </form>
  )
}

export default OrderTableFilters
