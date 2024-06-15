import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from './ui/Button'

interface PaginationProps {
  currentPage: number
  onPageChange: (newPage: number) => void
  hasMore: boolean
}

export function Pagination({
  currentPage,
  onPageChange,
  hasMore
}: PaginationProps) {
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1)
      scrollToTop()
    }
  }

  const goToNextPage = () => {
    if (hasMore) {
      onPageChange(currentPage + 1)
      scrollToTop()
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className='flex items-center justify-end gap-3'>
      <Button
        onClick={goToPreviousPage}
        variant='outline'
        className='h-8 w-8 p-0'
        disabled={currentPage === 1}
      >
        <ChevronLeft className='h-4 w-4' />
      </Button>
      <div className='text-sm'>{currentPage}</div>
      <Button
        onClick={goToNextPage}
        variant='outline'
        className='h-8 w-8 p-0'
        disabled={!hasMore}
      >
        <ChevronRight className='h-4 w-4' />
      </Button>
    </div>
  )
}
