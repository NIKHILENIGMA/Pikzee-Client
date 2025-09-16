import { type FC } from 'react'
import { Footer, Header } from '../components'
import { Outlet } from 'react-router'

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
