import { queryOptions, useQuery } from '@tanstack/react-query'

import { workspaceKeys } from '@/shared/lib/query-keys'

import { getWorkspaceByIdApi, listWorkspacesApi } from '../api/workspace-api'

const listWorkspacesQueryOptions = () => {
    return queryOptions({
        queryKey: workspaceKeys.lists(),
        queryFn: listWorkspacesApi
    })
}

export const useListWorkspaces = () => {
    return useQuery({
        ...listWorkspacesQueryOptions()
    })
}

const getWorkspaceByIdQueryOptions = (id: string) => {
    return queryOptions({
        queryKey: workspaceKeys.detail(id),
        queryFn: () => getWorkspaceByIdApi(id)
    })
}

export const useGetWorkspaceById = (workspaceId: string) => {
    return useQuery({
        ...getWorkspaceByIdQueryOptions(workspaceId)
    })
}
