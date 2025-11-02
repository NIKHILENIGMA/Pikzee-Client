export interface Workspace {
    id: string
    name: string
    slug: string
    ownerId: string
    workspaceLogo: string
    members: {
        userId: string
        name: string
        email: string
        permission: string
    }[]
    projects: Project[]
}

export type Project = {
    id: string
    projectName: string
    status: 'Active' | 'Inactive'
    lastUpdated: string
    createdAt: string
    storage: number
}
