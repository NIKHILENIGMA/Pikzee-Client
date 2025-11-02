import { MoreHorizontalIcon, User } from 'lucide-react'
import { type FC } from 'react'
import { useNavigate } from 'react-router'

import { Button } from '@/components/ui/button'

interface ContentHeaderProps {
    name: string
    noOfProjects: number
    onShowMembers: () => void
    onSettingsOpen: () => void
    members: {
        userId: string
        name: string
        email: string
        permission: string
    }[]
}

const ContentHeader: FC<ContentHeaderProps> = ({ name, noOfProjects, onShowMembers, members }) => {
    const navigate = useNavigate()
    return (
        <div className="w-full flex justify-between mb-4 font-medium text-xl">
            <div className="flex flex-col">
                <div className="text-2xl font-bold">{name}</div>
                <div className="text-sm text-muted-foreground">{noOfProjects} Projects</div>
            </div>
            <div className="flex items-center">
                {members && members.length > 0 ? (
                    <div
                        className="px-2 flex items-center space-x-2 cursor-pointer"
                        onClick={onShowMembers}>
                        {members.slice(0, 3).map((src, i) => {
                            if (i === 0) {
                                return (
                                    <div
                                        key={i}
                                        className="w-7 h-7 rounded-full overflow-hidden border-primary border-2.5 z-10">
                                        <img
                                            src={members[i].userId}
                                            alt={`Member ${i + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                )
                            }
                            if (i === 1) {
                                return (
                                    <div
                                        key={i}
                                        className="w-7 h-7 rounded-full overflow-hidden border-primary border-2.5 z-20 -ml-4">
                                        <img
                                            src={members[i].userId}
                                            alt={`Member ${i + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                )
                            }
                            return (
                                <div
                                    key={i}
                                    className="w-7 h-7 rounded-full overflow-hidden border-primary border-2.5 z-30 -ml-5">
                                    <img
                                        src={members[i].userId}
                                        alt={`Member ${i + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            )
                        })}
                    </div>
                ) : (
                    <button
                        type="button"
                        onClick={onShowMembers}
                        className="px-2 flex items-center cursor-pointer text-muted-foreground"
                        aria-label="No members">
                        {/* simple inline user icon fallback */}
                        <User className="bg-primary w-7 h-7 rounded-full p-1 shadow text-white" />
                    </button>
                )}
                <Button
                    variant={'link'}
                    onClick={() => navigate('/settings/workspace')}>
                    <MoreHorizontalIcon />
                </Button>
            </div>
        </div>
    )
}

export default ContentHeader
