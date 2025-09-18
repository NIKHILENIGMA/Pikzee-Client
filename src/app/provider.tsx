import { Suspense, useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ErrorBoundary } from 'react-error-boundary'

type AppProviderProps = {
    children: React.ReactNode
}

const queryConfig = {
    queries: {
        refetchOnWindowFocus: false, // Disable refetch on window focus
        retry: false, // Disable automatic retries
        staleTime: 1000 * 60
    }
}

const MainFallback = () => {
    return <div>Something went wrong!</div>
}

const AppProvider = ({ children }: AppProviderProps) => {
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: queryConfig
            })
    )
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ErrorBoundary FallbackComponent={MainFallback}>
                <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
            </ErrorBoundary>
        </Suspense>
    )
}

export default AppProvider
