import type { FC } from 'react'

const LoginPage: FC = () => {
    return (
        <div className="p-4 w-full min-h-screen">
            <h1>Login</h1>
            <form className="flex flex-col gap-4 mt-4">
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                    />
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginPage
