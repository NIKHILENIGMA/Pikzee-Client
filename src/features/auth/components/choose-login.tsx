import { type FC } from 'react'

import { Button } from '@/components/ui/button'
import { Mail } from '@/shared/assets/icons'

import { SocialLoginButtons } from './social-login-buttons'

interface ChooseLoginProps {
    onStepChange: (step: 'email' | 'code') => void
}

const ChooseLogin: FC<ChooseLoginProps> = ({ onStepChange }) => {
    return (
        <div className="w-full flex flex-col items-center">
            <Button
                onClick={() => onStepChange('email')}
                variant={'outline'}
                className="space-x-1.5 w-full">
                <Mail /> <span>Continue with Email</span>
            </Button>
            <div className="flex items-center my-4">
                <hr className="flex-grow border-gray-300" />
                <span className="px-2 text-sm text-gray-400">OR</span>
                <hr className="flex-grow border-gray-300" />
            </div>
            <SocialLoginButtons />
        </div>
    )
}

export default ChooseLogin
