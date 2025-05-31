import { ArrowRight, Search, X } from 'lucide-react'

import OrderDetails from './Order-details'
import { Button } from './ui/button'
import { Dialog, DialogTrigger } from './ui/dialog'
import { TableCell, TableRow } from './ui/table'

const OrderTableRow = () => {
  return (
    <TableRow>
      <TableCell>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant={'outline'} size={'xs'}>
              <Search className="h3 w-3" />
              <span className="sr-only">Order Details</span>
            </Button>
          </DialogTrigger>
          <OrderDetails />
        </Dialog>
      </TableCell>
      <TableCell className="font-mono text-xs font-medium">
        12asdw3123sadsa
      </TableCell>
      <TableCell className="text-muted-foreground">14 minutes ago</TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-slate-400" />
          <span className="text-muted-foreground font-medium">Pending</span>
        </div>
      </TableCell>
      <TableCell className="font-medium">Jorge da Silva</TableCell>
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
}

export default OrderTableRow
