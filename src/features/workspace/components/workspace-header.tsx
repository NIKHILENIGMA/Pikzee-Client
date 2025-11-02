import { LayoutGrid, List, ListFilter, Plus } from 'lucide-react'
import { useState, type FC } from 'react'

import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { TabsList, TabsTrigger } from '@/components/ui/tabs'

type ProjectStatus = 'All' | 'Active' | 'Inactive'

const WorkspaceHeader: FC = () => {
    const [status, setStatus] = useState<ProjectStatus>('All')

    return (
        <div className="w-full h-12 border-b border-border flex-shrink-0 justify-between items-center px-4 flex">
            <div className="filters flex space-x-4 items-center">
                <TabsList>
                    <TabsTrigger value="grid">
                        <LayoutGrid />{' '}
                    </TabsTrigger>
                    <TabsTrigger value="table">
                        <List />{' '}
                    </TabsTrigger>
                </TabsList>

                <Popover>
                    <PopoverTrigger className="hover:bg-accent/20 cursor-pointer border border-border px-2.5 py-1.5 rounded-sm text-sm flex items-center space-x-1.5">
                        <ListFilter /> <span>Project Status: {status.slice(0, 1).toUpperCase() + status.slice(1)}</span>
                    </PopoverTrigger>
                    <PopoverContent
                        className="w-40 p-1.5"
                        align="start">
                        <Select
                            value={status}
                            onValueChange={(value: ProjectStatus) => setStatus(value)}>
                            <SelectTrigger className="w-full">
                                <SelectValue
                                    placeholder="All"
                                    className="text-foreground"
                                />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="All">All</SelectItem>
                                <SelectItem value="Active">Active</SelectItem>
                                <SelectItem value="Inactive">Inactive</SelectItem>
                            </SelectContent>
                        </Select>
                    </PopoverContent>
                </Popover>
                <div className=""></div>
            </div>
            <div className="actions">
                <Button
                    variant="outline"
                    size={'sm'}>
                    <Plus /> New Project
                </Button>
            </div>
        </div>
    )
}

export default WorkspaceHeader
