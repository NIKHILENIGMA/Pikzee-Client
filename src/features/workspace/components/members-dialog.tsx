import { CheckCheck, ChevronDown } from 'lucide-react'
import { type FC } from 'react'

import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { type Workspace } from '@/features/workspace/types'

interface MembersDialogProps {
    showMembers: boolean
    setShowMembers: (show: boolean) => void
    workspace: Workspace
}

const PermissionPalette = [
    { label: 'Full Access', value: 'FULL_ACCESS', description: 'Can view, comment, edit, and manage settings' },
    { label: 'Edit', value: 'EDIT', description: 'Can edit content and comment' },
    { label: 'View Only', value: 'VIEW_ONLY', description: 'Can view content' },
    { label: 'Comment Only', value: 'COMMENT_ONLY', description: 'Can view and comment on content' }
]

const MembersDialog: FC<MembersDialogProps> = ({ showMembers, setShowMembers, workspace }) => {
    return (
        <Dialog
            open={showMembers}
            onOpenChange={() => {
                setShowMembers(!showMembers)
            }}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Members</DialogTitle>
                    <div className="flex flex-col space-y-2 mt-4">
                        <div className="invite-member flex space-x-2">
                            <Input
                                placeholder="Enter email to invite (e.g. jane@company.com)"
                                aria-label="Invite member email"
                            />
                            <Button variant="default">Send Invite</Button>
                        </div>
                        <div className="members flex space-x-2 border-t border-border mt-4 flex-col">
                            {workspace.members.map((member) => (
                                <div className="w-full flex items-center justify-between p-2 border-b border-border">
                                    <div className="flex flex-col">
                                        <span className="font-semibold">{member.name}</span>
                                        <span className="text-sm text-muted-foreground">{member.email}</span>
                                    </div>

                                    {member.permission === 'FULL_ACCESS' ? (
                                        <div className="flex items-center gap-2 text-sm px-2 py-1.5">FULL ACCESS</div>
                                    ) : (
                                        <Popover>
                                            <PopoverTrigger className="flex items-center gap-2 text-sm px-2 py-1.5 hover:bg-secondary">
                                                <div className="flex items-center gap-2">
                                                    {member.permission.replace('_', ' ')} <ChevronDown size={14} />
                                                </div>
                                            </PopoverTrigger>
                                            <PopoverContent align="end">
                                                <div className="flex flex-col">
                                                    <span className="font-semibold">Change Permission</span>
                                                    <div className="flex flex-col space-y-1">
                                                        {PermissionPalette.map((permission) => (
                                                            <button
                                                                key={permission.label}
                                                                type="button"
                                                                className="w-full flex justify-between items-center hover:bg-secondary/90 p-2 rounded cursor-pointer pointer-events-auto text-left">
                                                                <div className="flex flex-col">
                                                                    <span>{permission.label}</span>
                                                                    <span className="text-xs text-muted-foreground">{permission.description} </span>
                                                                </div>
                                                                {member.permission === permission.value ? (
                                                                    <CheckCheck
                                                                        size={20}
                                                                        className="text-primary"
                                                                    />
                                                                ) : null}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>
                                            </PopoverContent>
                                        </Popover>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default MembersDialog
