import { type FC } from 'react'

import ContentLayout from '@/components/layout/content-layout'
import { Tabs } from '@/components/ui/tabs'
import WorkspaceContent from '@/features/workspace/components/workspace-content'
import WorkspaceHeader from '@/features/workspace/components/workspace-header'
import type { Workspace, Project } from '@/features/workspace/types'

const data: Array<Project> = [
    {
        id: '1',
        projectName: 'Project 1',
        status: 'Active',
        lastUpdated: '2023-01-01',
        createdAt: '2022-12-01',
        storage: 100
    },
    {
        id: '2',
        projectName: 'Project 2',
        status: 'Inactive',
        lastUpdated: '2023-01-02',
        createdAt: '2022-12-02',
        storage: 200
    }
]

const currentWorkspace: Workspace = {
    id: 'e250c90f-13ec-4282-a6c2-31794d2477f4',
    name: "Nikhil\t's Workspace",
    slug: 'Nikhil\t-1760458402045',
    ownerId: 'user_32xk6cu6zGi6DrkikD1L3c7do16',
    workspaceLogo: '',
    members: [
        {
            userId: 'user_32xk6cu6zGi6DrkikD1L3c7do16',
            name: 'Nikhil',
            email: 'nikhil@example.com',
            permission: 'FULL_ACCESS'
        },
        {
            userId: 'user_3442DKF54P6zrk4cw0KkivEZVlB',
            name: 'John',
            email: 'john@example.com',
            permission: 'COMMENT_ONLY'
        },
        {
            userId: 'user_3442DO00Waz8vwVq62jLXoww5re',
            name: 'Jane',
            email: 'jane@example.com',
            permission: 'COMMENT_ONLY'
        }
    ],
    projects: data
}

const WorkspaceDashboard: FC = () => {
    // const { data: workspaceDetails, isPending } = useCurrentUserWorkspace()

    // if (isPending) return <div>Loading...</div>
    // if (isError) return <div>Error loading workspace data.</div>
    // if (!workspaceDetails) return <div>No workspace data found.</div>
    return (
        <ContentLayout>
            <Tabs defaultValue="grid">
                {/* Header */}
                <WorkspaceHeader />

                {/* Content */}
                <WorkspaceContent workspace={currentWorkspace} />
            </Tabs>
        </ContentLayout>
    )
}

export default WorkspaceDashboard
