import { ErrorBoundary } from 'react-error-boundary'

import { LoginFallback } from '@/components'
import AuthLayout from '@/components/layout/auth-layout'
import { Toaster } from '@/components/ui/sonner'
import { LoginForm } from '@/features/auth'

export default function LoginPage() {
    return (
        <AuthLayout>
            <ErrorBoundary
                FallbackComponent={({ error, resetErrorBoundary }) => (
                    <LoginFallback
                        error={error}
                        resetError={resetErrorBoundary}
                    />
                )}>
                <LoginForm />
            </ErrorBoundary>
            <Toaster />
        </AuthLayout>
    )
}
