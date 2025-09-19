import { type FC } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'

import EditorPage from '@/features/block/pages/Editor'

import { MainLayout } from '../layout'

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
        path: '/editor',
        element: <EditorPage />
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
