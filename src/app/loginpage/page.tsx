import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { ErrorBoundary } from '@/components/common/ErrorBoundary'
import { LoadingSpinner } from '@/components/common/LoadingSpinner'

const LoginForm = dynamic(() => import('@/components/LoginPage/LoginForm'), {
    loading: () => <LoadingSpinner />,
    ssr: false
  })

export default function LoginPagePage() {
  return (
    <ErrorBoundary>
      <main className="container mx-auto p-4">
        <Suspense fallback={<LoadingSpinner />}>
          <LoginForm />
        </Suspense>
      </main>
    </ErrorBoundary>
  )
}