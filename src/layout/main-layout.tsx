import { type FC } from 'react'
import { Outlet } from 'react-router'

import { Footer, Header } from '@/components'

const MainLayout: FC = () => {
    return (
        <>
            <Header />
            <main className="">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default MainLayout
