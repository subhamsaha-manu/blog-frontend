import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { Navigate, Outlet, useRoutes } from 'react-router-dom'

import { SpinnerContainer } from '@/components/elements/Spinner'
import { ErrorFallback, MainLayout } from '@/components/Layout'
import { Dashboard } from '@/features/dashboard'

const App = () => {
  return (
    <MainLayout>
      <ErrorBoundary fallback={<ErrorFallback />}>
        <Suspense fallback={<SpinnerContainer />}>
          <Outlet />
        </Suspense>
      </ErrorBoundary>
    </MainLayout>
  )
}

export const AppRoutes = () => {
  const commonRoutes = [
    {
      path: '/',
      element: <App />,
      children: [{ path: '/', element: <Dashboard /> }],
    },
  ]

  const fallbackRoute = { path: '*', element: <Navigate to="/" replace /> }

  const routes = [...commonRoutes, fallbackRoute]

  return useRoutes(routes)
}
