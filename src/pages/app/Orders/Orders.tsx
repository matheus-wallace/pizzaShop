import { ArrowRight, Search, X } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const Orders = () => {
  return (
    <>
      <Helmet title="Orders" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Orders</h1>
      </div>
      <div className="space-y-2.5">
        <form className="flex items-center gap-2">
          <span className="text-sm font-semibold">Filters:</span>
          <Input placeholder="Customer name" className="h-8 w-[320px]" />
        </form>
        <div>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[64px]"></TableHead>
                  <TableHead className="w-[140px]">Order ID</TableHead>
                  <TableHead className="w-[180px]">Placed At</TableHead>
                  <TableHead className="w-[140px]">Status</TableHead>
                  <TableHead>Customer Name</TableHead>
                  <TableHead className="w-[140px]">Total</TableHead>
                  <TableHead className="w-[164px]"></TableHead>
                  <TableHead className="w-[132px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Array.from({ length: 10 }).map((_, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell>
                        <Button variant={'outline'} size={'xs'}>
                          <Search className="h3 w-3" />
                          <span className="sr-only">Order Details</span>
                        </Button>
                      </TableCell>
                      <TableCell className="font-mono text-xs font-medium">
                        12asdw3123sadsa
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        14 minutes ago
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-slate-400" />
                          <span className="text-muted-foreground font-medium">
                            Pending
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">
                        Jorge da Silva
                      </TableCell>
                      <TableCell className="font-medium">R$ 150,00</TableCell>
                      <TableCell>
                        <Button variant={'ghost'} className="xs">
                          <ArrowRight className="mr-2 h-3 w-3" />
                          Aprove
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Button variant={'ghost'} className="xs">
                          <X className="mr-2 h-3 w-3" />
                          Cancel
                        </Button>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Orders
