import { type FC } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'

import { MainLayout, DashboardLayout } from '@/components'

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '',
                lazy: () => import('./routes/home').then((module) => ({ Component: module.default }))
            },
            {
                path: 'about',
                lazy: () => import('./routes/about').then((module) => ({ Component: module.default }))
            }
        ]
    },
    {
        path: '/auth',
        children: [
            {
                path: 'login',
                lazy: () => import('./routes/auth/login').then((module) => ({ Component: module.default }))
            },
            {
                path: 'signup',
                lazy: () => import('./routes/auth/signup').then((module) => ({ Component: module.default }))
            }
        ]
    },
    {
        path: '/sso-callback',
        lazy: () => import('./routes/auth/sso-callback').then((module) => ({ Component: module.default }))
    },
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
            {
                path: '',
                element: <div>Dashboard Home</div>
            },
            {
                path: 'docs',
                element: <div>Dashboard Docs</div>
            },
            {
                path: 'magic-editor',
                element: <div>Dashboard Magic Editor</div>
            },
            {
                path: 'integrations',
                element: <div>Dashboard Integrations</div>
            }
        ]
    },
    // {
    //     path: '/editor',
    //     element: <EditorPage />
    // },
    {
        path: '*',
        lazy: () => import('./routes/not-found').then((module) => ({ Component: module.default }))
    }
])

const AppRouter: FC = () => {
    return <RouterProvider router={router} />
}

export default AppRouter
