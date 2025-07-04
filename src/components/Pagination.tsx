import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react'

import { Button } from './ui/button'

export interface PaginationProps {
  pageIndex: number
  totalCount: number
  perPage: number
  onPageChange: (pageIndex: number) => Promise<void> | void
}

const Pagination = ({
  pageIndex,
  totalCount,
  perPage,
  onPageChange,
}: PaginationProps) => {
  const pages = Math.ceil(totalCount / perPage) || 1
  return (
    <div className="flex items-center justify-between">
      <span className="text-muted-foreground text-sm">
        Total pages {totalCount}
      </span>

      <div className="flex items-center gap-6 lg:gap-8">
        <div className="flex text-sm font-medium">
          Page {pageIndex + 1} of {pages}
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant={'outline'}
            className="h-8 w-8 p-0"
            onClick={() => onPageChange(0)}
            disabled={pageIndex === 0}
          >
            {<ChevronsLeft className="h-4 w-4" />}
            <span className="sr-only">First page</span>
          </Button>
          <Button
            variant={'outline'}
            className="h-8 w-8 p-0"
            onClick={() => onPageChange(pageIndex - 1)}
            disabled={pageIndex === 0}
          >
            {<ChevronLeft className="h-4 w-4" />}
            <span className="sr-only">Previous page</span>
          </Button>
          <Button
            variant={'outline'}
            className="h-8 w-8 p-0"
            onClick={() => onPageChange(pageIndex + 1)}
            disabled={pages <= pageIndex + 1}
          >
            {<ChevronRight className="h-4 w-4" />}
            <span className="sr-only">Next page</span>
          </Button>
          <Button
            variant={'outline'}
            className="h-8 w-8 p-0"
            onClick={() => onPageChange(pages - 1)}
            disabled={pages <= pageIndex + 1}
          >
            {<ChevronsRight className="h-4 w-4" />}
            <span className="sr-only">Last page</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Pagination
