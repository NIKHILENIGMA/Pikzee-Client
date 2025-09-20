import { Button } from '@/components/ui/button'
import { FcGoogle, FaGithub } from '@/shared/assets/icons'

export const SocialLoginButtons = () => (
    <div className="space-y-3 w-full flex flex-col">
        <Button
            variant="outline"
            className="space-x-1.5">
            <FcGoogle size={20} />
            Log in with Google
        </Button>
        <Button
            variant="outline"
            className="flex items-center justify-center gap-2 border rounded-md mb-4">
            <FaGithub size={20} />
            Log in with Github
        </Button>
    </div>
)
