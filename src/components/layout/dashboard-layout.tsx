import { Link, Outlet } from 'react-router'

import { cn } from '@/shared/lib/utils'

const DashboardLayout = () => {
    return (
        <div className="w-full h-screen flex">
            <div className={cn('w-20 bg-gray-800 text-white p-4')}>
                <h2 className="text-lg font-semibold">Dashboard</h2>
                <ul className="mt-4">
                    <li className="py-2 hover:bg-gray-700 rounded">
                        <Link to="/dashboard">Overview</Link>
                    </li>
                    <li className="py-2 hover:bg-gray-700 rounded">
                        <Link to="/dashboard/settings">Settings</Link>
                    </li>
                    <li className="py-2 hover:bg-gray-700 rounded">
                        <Link to="/dashboard/profile">Profile</Link>
                    </li>
                </ul>
            </div>
            <div className="flex-1 p-4">
                {/* Main content goes here */}
                <Outlet />
            </div>
        </div>
    )
}

export default DashboardLayout
