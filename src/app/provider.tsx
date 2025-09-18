import { Suspense, useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ErrorBoundary } from 'react-error-boundary'

import { ThemeProvider } from '@/components/theme/theme-provider'
import { queryConfig } from '@/lib/react-query'

type AppProviderProps = {
    children: React.ReactNode
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
                <QueryClientProvider client={queryClient}>
                    <ThemeProvider
                        defaultTheme="dark"
                        storageKey="content-app-theme">
                        {children}
                    </ThemeProvider>
                </QueryClientProvider>
            </ErrorBoundary>
        </Suspense>
    )
}

export default AppProvider
