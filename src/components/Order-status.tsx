export type OrderStatusType =
  | 'pending'
  | 'canceled'
  | 'processing'
  | 'delivering'
  | 'delivered'

interface OrderStatusProps {
  status: OrderStatusType
}

const orderStatusMap: Record<OrderStatusType, string> = {
  pending: 'Pending',
  canceled: 'Canceled',
  delivered: 'Delivered',
  delivering: 'Delivering',
  processing: 'Processing',
}

const OrderStatus = ({ status }: OrderStatusProps) => {
  return (
    <div className="flex items-center gap-2">
      {status === 'pending' && (
        <span
          data-testid="badge"
          className="inline-flex h-2 w-2 animate-pulse rounded-full bg-slate-400"
        />
      )}
      {status === 'canceled' && (
        <span
          data-testid="badge"
          className="inline-flex h-2 w-2 rounded-full bg-rose-500"
        />
      )}
      {status === 'delivered' && (
        <span
          data-testid="badge"
          className="inline-flex h-2 w-2 rounded-full bg-emerald-500"
        />
      )}
      {['processing', 'delivering'].includes(status) && (
        <span
          data-testid="badge"
          className="inline-flex h-2 w-2 rounded-full bg-amber-500"
        />
      )}
      <span className="text-muted-foreground font-medium">
        {orderStatusMap[status]}
      </span>
    </div>
  )
}

export default OrderStatus
