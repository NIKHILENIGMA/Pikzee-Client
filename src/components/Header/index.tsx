import { type FC } from 'react'
import { Link, NavLink } from 'react-router'
import { NAV_LINKS } from '../../constants'
import { ModeToggle } from '../theme/mode-toggle'
import { useAuthContext } from '@/features/auth/hooks/useAuthContext'
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger } from '@/components/ui/menubar'

const Header: FC = () => {
    const { user, isAuthenticated, loggedOut } = useAuthContext()
    const handleLogout = async () => {
        await fetch('http://localhost:3000/api/v1/auth/logout', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })

        loggedOut()
    }

    return (
        <header className="w-full bg-transparent fixed top-0 z-20 text-secondary-foreground">
            <div className="container mx-auto flex items-center justify-between py-4 px-6">
                <h1 className="text-2xl font-bold">
                    <Link
                        to="/"
                        className="hover:text-blue-200">
                        ContentApp
                    </Link>
                </h1>
                <nav className="space-x-4">
                    {NAV_LINKS.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            className={({ isActive }) => `hover:text-primary/50 ${isActive ? 'text-primary' : ''}`}>
                            {link.label}
                        </NavLink>
                    ))}
                </nav>
                <ModeToggle />

                {user !== null && isAuthenticated ? (
                    <div className="flex items-center space-x-4">
                        <Menubar>
                            <MenubarMenu>
                                <MenubarTrigger asChild>
                                    {user.profilePicture ? (
                                        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary cursor-pointer">
                                            <img
                                                src={user.profilePicture}
                                                alt="User Avatar"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    ) : (
                                        <div
                                            className="w-10 h-10 rounded-full flex items-center justify-center bg-primary text-secondary font-bold text-lg border-2 border-primary cursor-pointer"
                                            aria-label={(() => {
                                                const [first = '', last = ''] = user.name?.split(' ') ?? []
                                                return `${first[0] ?? ''}${last[0] ?? ''}`.toUpperCase()
                                            })()}
                                            title={user.name}>
                                            {(() => {
                                                const [first = '', last = ''] = user.name?.split(' ') ?? []
                                                return `${first[0] ?? ''}${last[0] ?? ''}`.toUpperCase()
                                            })()}
                                        </div>
                                    )}
                                </MenubarTrigger>
                                <MenubarContent align="end">
                                    <MenubarItem asChild>
                                        <Link to="/profile">Profile</Link>
                                    </MenubarItem>
                                    <MenubarItem asChild>
                                        <Link to="/settings">Settings</Link>
                                    </MenubarItem>
                                    <MenubarSeparator />
                                    <MenubarItem onClick={handleLogout}>Logout</MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>
                        </Menubar>
                    </div>
                ) : (
                    <div className="flex items-center space-x-4">
                        <Link
                            to="/auth/login"
                            className="px-4 py-2 bg-primary text-secondary transition-colors">
                            Login
                        </Link>
                        <Link
                            to="/auth/signup"
                            className="px-4 py-2 transition-colors">
                            Sign Up
                        </Link>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header
