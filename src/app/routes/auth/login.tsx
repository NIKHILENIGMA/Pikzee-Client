import { ErrorBoundary } from 'react-error-boundary'

import { LoginFallback } from '@/components'
import LoginLogo from '@/components/logo/login-logo'
import { Toaster } from '@/components/ui/sonner'
import { LoginForm } from '@/features/auth'

export default function LoginPage() {
    return (
        <div className="flex min-h-screen bg-[var(--bg-color)] text-[var(--text-color)]">
            {/* Left Section */}
            <div className="flex w-full lg:w-1/2 flex-col items-center justify-center px-6 lg:px-20">
                {/* Logo Placeholder */}
                <LoginLogo />

                <ErrorBoundary
                    FallbackComponent={({ error, resetErrorBoundary }) => (
                        <LoginFallback
                            error={error}
                            resetError={resetErrorBoundary}
                        />
                    )}>
                    <LoginForm />
                </ErrorBoundary>
            </div>

            {/* Right Section - Background Image Placeholder */}
            <div className="hidden lg:flex w-1/2 items-center justify-center bg-[var(--right-bg)]">
                <div className="h-full w-full">
                    <img
                        src="https://plus.unsplash.com/premium_photo-1681487916420-8f50a06eb60e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="background-img-placeholder"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
            <Toaster />
        </div>
    )
}
