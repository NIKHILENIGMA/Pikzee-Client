import { Edit2, Ellipsis, KeyRound, X } from 'lucide-react'
import type { FC } from 'react'

import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

const ProjectPopover: FC = () => {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <button className="px-2 py-1 rounded-sm hover:bg-accent/20">
                    <Ellipsis />
                </button>
            </PopoverTrigger>
            <PopoverContent
                align="end"
                className="w-40 p-1.5">
                <div className="flex flex-col space-y-2.5">
                    <Button
                        variant={'ghost'}
                        className="w-full text-start px-2.5 py-1 hover:bg-secondary rounded-sm justify-start ">
                        <KeyRound /> <span>Manage Access</span>
                    </Button>
                    <Button
                        variant={'ghost'}
                        className="w-full text-start px-2.5 py-1 hover:bg-secondary rounded-sm justify-start">
                        <Edit2 /> <span>Edit Project</span>
                    </Button>
                    <Button
                        variant={'ghost'}
                        className="w-full text-start px-2.5 py-1 hover:bg-secondary rounded-sm justify-start">
                        <X /> <span className="text-start">Delete Project</span>
                    </Button>
                </div>
            </PopoverContent>
        </Popover>
    )
}

export default ProjectPopover
