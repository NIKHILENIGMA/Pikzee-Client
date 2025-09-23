import { type FC } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { Toaster } from 'sonner'

import { LoginFallback } from '@/components'
import AuthLayout from '@/components/layout/auth-layout'
import SignupForm from '@/features/auth/components/signup-form'

const Signup: FC = () => {
    return (
        <AuthLayout>
            <ErrorBoundary
                FallbackComponent={({ error, resetErrorBoundary }) => (
                    <LoginFallback
                        error={error}
                        resetError={resetErrorBoundary}
                    />
                )}>
                <SignupForm />
            </ErrorBoundary>
            <Toaster />
        </AuthLayout>
    )
}

export default Signup
