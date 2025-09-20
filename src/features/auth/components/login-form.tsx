import { useState, type FC } from 'react'
import { Link } from 'react-router'

import { useEmailAuth } from '../hooks/use-email-auth'

import ChooseLogin from './choose-login'
import EmailLogin from './email-login'

type LoginStep = 'choose' | 'email' | 'code'

const LoginForm: FC = () => {
    const [step, setStep] = useState<LoginStep>('choose')
    const { startEmailSignIn } = useEmailAuth()

    return (
        <div className="relative w-full max-w-md shadow-md rounded-lg p-6 flex flex-col z-50">
            <div className="text-center mb-6">
                <h1 className="text-3xl font-semibold">Log in with your account</h1>
            </div>

            {step === 'choose' && <ChooseLogin onStepChange={setStep} />}

            {step === 'email' && (
                <EmailLogin
                    setStep={setStep}
                    startEmailSignIn={startEmailSignIn}
                />
            )}

            <div className="text-center text-sm text-gray-500 mt-6">
                Don’t have an account yet?{' '}
                <Link
                    to="/auth/signup"
                    className="text-primary">
                    Sign up
                </Link>
            </div>
        </div>
    )
}

export default LoginForm
