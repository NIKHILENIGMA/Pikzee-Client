import { Plus } from 'lucide-react'
import { useState, type FC } from 'react'

import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'

interface AddProjectCardProps {
    open: boolean
    triggerBtn: boolean
    setOpen: (open: boolean) => void
}

const AddProjectCard: FC<AddProjectCardProps> = ({ open, setOpen, triggerBtn }) => {
    const [projectName, setProjectName] = useState<string>('')

    return (
        <Dialog
            open={open}
            onOpenChange={setOpen}>
            {triggerBtn && (
                <DialogTrigger asChild>
                    <Button variant="default">
                        <Plus className="mr-2 h-4 w-4" /> New Project
                    </Button>
                </DialogTrigger>
            )}
            <DialogContent
                onEscapeKeyDown={() => setOpen(false)}
                onPointerDownOutside={() => setOpen(false)}
                className="max-w-2xl md:w-[600px] sm:w-full">
                <DialogHeader>
                    <DialogTitle>Project</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col items-center gap-6">
                    {/* Image Placeholder with Input Overlay */}
                    <div className="relative w-64 h-64 border-2 border-dashed border-card rounded-lg flex items-center justify-center bg-card">
                        <span className="absolute inset-0 flex items-center justify-center text-foreground pointer-events-none">Add Image</span>
                        <Input
                            type="text"
                            value={projectName}
                            onChange={(e) => setProjectName(e.target.value)}
                            placeholder="Enter project name"
                            className="absolute bottom-4 left-1/2 -translate-x-1/2 w-3/4 bg-background bg-opacity-80 border border-input rounded px-3 py-2"
                            style={{ zIndex: 2 }}
                        />
                    </div>
                    <Button
                        type="button"
                        variant="default"
                        className="w-3/4 max-w-xs">
                        Create Project
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default AddProjectCard
