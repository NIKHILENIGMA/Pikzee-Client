import { Plus, MoreHorizontal, Users } from 'lucide-react'
import { useState, type FC } from 'react'
import { useNavigate } from 'react-router'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { DashboardHeader } from '@/features/dashboard'
import ProjectCard from '@/features/dashboard/components/project-card'
import AddProjectCard from '@/features/dashboard/components/workspace/add-project-card'

import PROJECT_CARDS from '../../../../mock/projects.json'
// const PROJECT_CARDS = [
//     {
//         title: 'YouTube Video',
//         imageUrl:
//             'https://plus.unsplash.com/premium_photo-1663040316559-8684ca45d7e9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//         fileSize: '0 MB'
//     },
//     {
//         title: 'YouTube Video',
//         imageUrl:
//             'https://plus.unsplash.com/premium_photo-1663040316559-8684ca45d7e9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//         fileSize: '0 MB'
//     },
//     {
//         title: 'YouTube Video',
//         imageUrl:
//             'https://plus.unsplash.com/premium_photo-1663040316559-8684ca45d7e9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//         fileSize: '0 MB'
//     }
// ]

const Dashboard: FC = () => {
    const navigate = useNavigate()
    const [open, setOpen] = useState<boolean>(false)
    return (
        <div className="w-full h-full bg-background text-foreground">
            {/* Header */}
            <DashboardHeader />
            {/* Main Content */}
            <main className="px-6 py-8">
                {/* Workspace Header */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-2xl font-semibold mb-1">Nikhil's Workspace</h1>
                        <p className="text-slate-400 text-sm">2 Projects (1 Inactive)</p>
                    </div>

                    <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8 bg-indigo-600">
                            <AvatarFallback className="bg-indigo-600">
                                <Users className="h-4 w-4" />
                            </AvatarFallback>
                        </Avatar>
                        <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                    {/* YouTube Video Project */}
                    {PROJECT_CARDS.projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            imageUrl={project.image_url}
                            fileSize={project.size}
                            onProjectCardClick={() => {
                                navigate(`/dashboard/projects`)
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
                </div>
            </main>
        </div>
    )
}

export default Dashboard
