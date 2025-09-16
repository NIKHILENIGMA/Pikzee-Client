import { useState, type ChangeEvent, type FC, type FormEvent } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { Link, useNavigate } from 'react-router'
import { LuEye } from 'react-icons/lu'
import { LuEyeClosed } from 'react-icons/lu'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { HiOutlineArrowRight } from 'react-icons/hi'
import { useAuthContext } from '../hooks/useAuthContext'

interface LoginForm {
    email: ''
    password: ''
}

interface LoginResponse {
    success: boolean
    statusCode: number
    request: {
        ip: string
        method: string
        url: string
    }
    message: string
    data: {
        token: string
        user: {
            id: string
            name: string
            email: string
            profilePicture: string | null
            lastLogin: string | null
        }
    } | null
}

const Login: FC = () => {
    const [visible, setVisible] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)
    const navigate = useNavigate()
    const { loggedIn } = useAuthContext()

    const [formData, setFormData] = useState<LoginForm>({
        email: '',
        password: ''
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        const response = await fetch('http://localhost:3000/api/v1/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData),
            credentials: 'include'
        })

        const loginData: LoginResponse = await response.json()

        if (loginData.data === null && loginData.statusCode !== 200) {
            setError(loginData.message)
            return
        }

        if (loginData.statusCode === 200 && loginData.data !== null) {
            loggedIn(loginData.data.user, true, loginData.data.token)
            navigate('/')
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-background  px-4">
            <div className="w-full max-w-md bg-secondary/50 shadow-md rounded-lg p-6">
                <div className="flex justify-center mb-6">
                    <div className="text-secondary-foreground text-3xl font-bold">🌀 Specify</div>
                </div>

                <div className="text-center mb-4">
                    <h1 className="text-xl font-semibold">Log in with your work email</h1>
                    <p className="text-sm text-gray-500 mt-1">Use your work email to log in to your team workspace.</p>
                </div>

                {error && <div>{error}</div>}

                <Button
                    variant={'outline'}
                    className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 mb-4 hover:bg-gray-100 transition">
                    <FcGoogle size={20} />
                    Log in with Google
                </Button>

                <div className="flex items-center my-4">
                    <hr className="flex-grow border-gray-300" />
                    <span className="px-2 text-sm text-gray-400">OR</span>
                    <hr className="flex-grow border-gray-300" />
                </div>

                <form
                    className="space-y-4"
                    onSubmit={handleSubmit}>
                    <div>
                        <Label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700">
                            Email
                        </Label>
                        <Input
                            id="email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="yourname@company.com"
                            className="w-full"
                        />
                    </div>

                    <div>
                        <div className="flex justify-between items-center">
                            <Label
                                htmlFor="password"
                                className="block">
                                Password
                            </Label>
                            <Link
                                to="/forgot-password"
                                className="text-sm text-primary hover:underline">
                                Forgot password?
                            </Link>
                        </div>
                        <div className="relative">
                            <Input
                                id="password"
                                type={visible ? 'text' : 'password'}
                                placeholder="Enter your password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                            <button
                                type="button"
                                onClick={() => setVisible(!visible)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700">
                                {visible ? <LuEye size={20} /> : <LuEyeClosed size={20} />}
                            </button>
                        </div>
                    </div>

                    <Button
                        type="submit"
                        className="w-full">
                        Log in <HiOutlineArrowRight size={20} />
                    </Button>
                </form>

                <div className="text-center text-sm text-gray-500 mt-6">
                    Don’t have an account yet?{' '}
                    <Link
                        to="/auth/signup"
                        className="text-primary">
                        Sign up
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login
