import { Plus } from 'lucide-react'
import { useState, type FC } from 'react'
import { useNavigate } from 'react-router'

import { TabsContent } from '@/components/ui/tabs'
import ProjectCard from '@/features/dashboard/components/project-card'
import AddProjectCard from '@/features/dashboard/components/workspace/add-project-card'
import WorkspaceSetting from '@/features/dashboard/components/workspace/workspace-setting'
import { columns } from '@/features/workspace/components/columns'
import { DataTable } from '@/features/workspace/components/data-table'

import PROJECT_CARDS from '../../../../mock/projects.json'
import type { Workspace } from '../types'

import ContentHeader from './content-header'
import MembersDialog from './members-dialog'

interface WorkspaceContentProps {
    workspace: Workspace
}

const WorkspaceContent: FC<WorkspaceContentProps> = ({ workspace }) => {
    const [open, setOpen] = useState<boolean>(false)
    const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false)
    const [showMembers, setShowMembers] = useState<boolean>(false)

    const navigate = useNavigate()

    return (
        <div className="flex-1 p-4">
            <ContentHeader
                name={workspace.name}
                noOfProjects={workspace.projects.length}
                onShowMembers={() => setShowMembers(true)}
                onSettingsOpen={() => setIsSettingsOpen(true)}
                members={[]}
            />
            {/* Grid View */}
            <TabsContent value="grid">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                    {/* YouTube Video Project */}
                    {PROJECT_CARDS.projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            imageUrl={project.image_url}
                            fileSize={project.size}
                            onProjectCardClick={() => {
                                navigate(`/projects`)
                            }}
                        />
                    ))}

                    <article
                        className="bg-card text-foreground rounded-[0.8rem] overflow-hidden shadow-md w-3/3 md:h-64 cursor-pointer"
                        onClick={() => setOpen(true)}>
                        <div className="w-full h-full flex items-center justify-center">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-primary/80 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Plus className="h-8 w-8 text-foreground/80" />
                                </div>
                                <p className="text-foreground/80 text-base">New Project</p>
                            </div>
                        </div>
                    </article>

                    <AddProjectCard
                        open={open}
                        setOpen={setOpen}
                        triggerBtn={false}
                    />

                    <WorkspaceSetting
                        isOpen={isSettingsOpen}
                        onSettingsChange={setIsSettingsOpen}
                    />
                </div>
            </TabsContent>
            {/* Table View */}
            <TabsContent value="table">
                <div className="w-full px-16">
                    <DataTable
                        columns={columns}
                        data={workspace.projects}
                    />
                </div>
            </TabsContent>

            {/* Members Dialog */}
            <MembersDialog
                showMembers={showMembers}
                setShowMembers={setShowMembers}
                workspace={workspace}
            />
        </div>
    )
}

export default WorkspaceContent
