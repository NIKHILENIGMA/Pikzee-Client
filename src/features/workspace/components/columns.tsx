import { type ColumnDef } from '@tanstack/react-table'
import { MoreHorizontal } from 'lucide-react'

import type { Project } from '../types'

export const columns: ColumnDef<Project>[] = [
    {
        accessorKey: 'projectName',
        header: 'Project Name'
    },
    {
        accessorKey: 'status',
        header: 'Status'
    },
    {
        accessorKey: 'lastUpdated',
        header: 'Last Updated'
    },
    {
        accessorKey: 'createdAt',
        header: 'Created Date'
    },
    {
        accessorKey: 'storage',
        header: 'Storage'
    },
    {
        id: 'action',
        header: 'Action',
        cell: ({ row }) => (
            <button
                type="button"
                aria-label={`row actions ${row.original.id}`}
                className="p-1 rounded hover:bg-muted"
                onClick={(e) => {
                    e.stopPropagation()
                    // open menu / handle action for row.original.id
                }}>
                <MoreHorizontal className="w-5 h-5" />
            </button>
        ),
        enableSorting: false
    }
]
