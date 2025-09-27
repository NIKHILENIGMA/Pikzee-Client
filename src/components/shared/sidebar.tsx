import { useClerk, useUser } from '@clerk/clerk-react'
import { Dock, Home, LogOut, MagnetIcon, Settings, Sparkles } from 'lucide-react'
import type { FC } from 'react'
import { Link, useNavigate } from 'react-router'

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/shared/lib/utils'

import Logo from '../logo/logo'
import { Button } from '../ui/button'

import { ModeToggle } from './../theme/mode-toggle'

interface NavLink {
    to: string
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
    label: string
}

const NAV_LINKS: NavLink[] = [
    {
        to: '/dashboard',
        icon: Home,
        label: 'Home'
    },
    {
        to: '/dashboard/docs',
        icon: Dock,
        label: 'Projects'
    },
    {
        to: '/dashboard/magic-editor',
        icon: Sparkles,
        label: 'Magic Editor'
    },
    {
        to: '/dashboard/integrations',
        icon: MagnetIcon,
        label: 'Integrations'
    }
]

const Sidebar: FC = () => {
    const { user } = useUser()
    const navigate = useNavigate()
    const { signOut } = useClerk()

    const handleLogout = async () => {
        await signOut()
        navigate('/')
    }

    return (
        <aside className={cn('w-16 bg-sidebar p-4 flex flex-col items-center justify-between')}>
            <Logo
                logoPath="../../../public/dummylogo.jpg"
                classes="rounded-lg"
                redirectTo={'/dashboard'}
            />
            <nav className="mt-10 flex flex-col items-center space-y-4 h-[80%]">
                {NAV_LINKS.map((link: NavLink, idx: number) => (
                    <Link
                        key={link.to + idx}
                        to={link.to}
                        className="hover:bg-primary- p-2 rounded w-full text-center">
                        {link.icon && <link.icon />}
                    </Link>
                ))}
            </nav>
            <div className="mb-4 flex flex-col items-center">
                <div className="w-full flex justify-center">
                    <Popover>
                        <PopoverTrigger>
                            <Button
                                variant={'profile'}
                                size={'icon'}>
                                {user?.firstName?.split('')[0]}
                                {user?.lastName?.split('')[0]}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent
                            align="end"
                            className="w-48 p-0 bg-card">
                            <div className="flex flex-col items-center w-full py-6">
                                {/* User Image */}
                                <div className="mb-3">
                                    <img
                                        src={user?.imageUrl || '/default-avatar.png'}
                                        alt="User Avatar"
                                        className="w-16 h-16 rounded-full border-4 border-primary object-cover mx-auto"
                                    />
                                </div>
                                {/* Full Name */}
                                <div className="text-center mb-4">
                                    <span className="font-semibold text-sm">
                                        {user?.firstName} {user?.lastName}
                                    </span>
                                </div>
                                {/* Buttons */}
                                <div className="flex flex-col gap-2 w-full px-4">
                                    <Button
                                        variant="ghost"
                                        className="w-full flex justify-start"
                                        onClick={() => navigate('/dashboard/settings')}>
                                        <Settings /> Setting
                                    </Button>
                                    {/* Theme Button */}
                                    <ModeToggle />
                                    <Button
                                        className="w-full justify-start bg-transparent hover:bg-red-600 text-red-400 hover:text-white border border-red-400"
                                        onClick={handleLogout}>
                                        <LogOut /> Logout
                                    </Button>
                                </div>
                            </div>
                        </PopoverContent>
                    </Popover>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar
