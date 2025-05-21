import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { ErrorBoundary } from '@/components/common/ErrorBoundary'
import { LoadingSpinner } from '@/components/common/LoadingSpinner'

const ProductDetail = dynamic(() => import('@/components/ProductDetailPage/ProductDetail'), {
    loading: () => <LoadingSpinner />,
    ssr: false
  })

export default function ProductDetailPagePage() {
  return (
    <ErrorBoundary>
      <main className="container mx-auto p-4">
        <Suspense fallback={<LoadingSpinner />}>
          <ProductDetail />
        </Suspense>
      </main>
    </ErrorBoundary>
  )
}