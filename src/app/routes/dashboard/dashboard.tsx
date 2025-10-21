import { type FC } from 'react'

import { WorkspaceContent, WorkspaceHeader } from '@/features/dashboard'

const Dashboard: FC = () => {
    return (
        <div className="w-full h-full bg-background text-foreground">
            {/* Header */}
            <WorkspaceHeader />
            {/* Main Content */}
            <WorkspaceContent />
        </div>
    )
}

export default Dashboard
