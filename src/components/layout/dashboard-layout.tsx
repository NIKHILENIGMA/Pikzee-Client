import type { FC } from 'react'
import { Outlet } from 'react-router'

import Sidebar from '../shared/sidebar'

const DashboardLayout: FC = () => {
    return (
        <div className="w-full h-screen flex">
            <Sidebar />
            <div className="flex-1 p-4">
                {/* Main content goes here */}
                <Outlet />
            </div>
        </div>
    )
}

export default DashboardLayout
