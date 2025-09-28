import { type FC } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'

import { MainLayout, DashboardLayout } from '@/components'
import ProtectedRoute from '@/features/auth/components/protected-route'

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
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
            },
            {
                path: 'sso-callback',
                lazy: () => import('./routes/auth/sso-callback').then((module) => ({ Component: module.default }))
            }
        ]
    },
    {
        path: '/dashboard',
        element: (
            <ProtectedRoute>
                <DashboardLayout />
            </ProtectedRoute>
        ),
        children: [
            {
                index: true,
                lazy: () => import('./routes/dashboard/dashboard').then((module) => ({ Component: module.default }))
            },
            {
                path: 'documents',
                lazy: () => import('./routes/dashboard/document').then((module) => ({ Component: module.default }))
            },
            {
                path: 'magic-editor',
                lazy: () => import('./routes/dashboard/magic-editor').then((module) => ({ Component: module.default }))
            },
            {
                path: 'media-scheduler',
                lazy: () => import('./routes/dashboard/media-scheduler').then((module) => ({ Component: module.default }))
            }
        ]
    },
    {
        path: '*',
        lazy: () => import('./routes/not-found').then((module) => ({ Component: module.default }))
    }
])

const AppRouter: FC = () => {
    return <RouterProvider router={router} />
}

export default AppRouter
