import { createContext, useState, type FC, type ReactNode } from 'react'

interface User {
    id: string
    name: string
    email: string
    profilePicture: string | null
    lastLogin: string | null
}

type AuthContextType = {
    user: User | null
    accessToken: string
    isAuthenticated: boolean
    loggedIn: (loginUser: User, authenticated: boolean, token: string) => void
    loggedOut: () => void
}

export const AuthContext = createContext<AuthContextType | null>(null)

const initialUser = {
    id: '',
    name: '',
    email: '',
    profilePicture: null,
    lastLogin: null
}

const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User>(initialUser)
    const [accessToken, setAccessToken] = useState<string>('')
    const [isAuthenticated, setAuthenticated] = useState<boolean>(false)

    const loggedIn = (loginUser: User, authenticated: boolean, token: string) => {
        if (!loginUser) return
        ;(setUser(loginUser), setAuthenticated(authenticated))
        setAccessToken(token)
    }

    const loggedOut = () => {
        setUser(initialUser)
        setAuthenticated(false)
        setAccessToken('')
    }

    const value = {
        user,
        accessToken,
        isAuthenticated,
        loggedIn,
        loggedOut
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
