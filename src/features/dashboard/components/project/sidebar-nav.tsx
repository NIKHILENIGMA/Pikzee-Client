import { ChevronDown, ChevronRight, Folder, FolderOpen, Plus, Trash2 } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { cn } from '@/shared/lib/utils'

type SidebarItem = {
    label: string
    active?: boolean
    depth: number
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

const items: SidebarItem[] = [
    { label: 'Youtube Video', active: true, depth: 0 },
    { label: 'Footage', depth: 1 },
    { label: 'Graphics', depth: 1 },
    { label: 'private', depth: 1 },
    { label: 'Sound Effects', depth: 1 },
    { label: 'untitled folder', depth: 1 },
    { label: 'Recently Deleted', depth: 0, icon: Trash2 }
] as const

export function SidebarNav() {
    return (
        <aside className="hidden w-[260px] shrink-0 border-r border-border bg-(--color-sidebar) text-(--color-sidebar-foreground) md:block">
            <div className="flex h-14 items-center justify-between px-3">
                <div className="text-sm font-medium">Assets</div>
                <Button
                    variant="ghost"
                    size="icon"
                    aria-label="Add">
                    <Plus className="size-4" />
                </Button>
            </div>

            <nav className="space-y-1 px-2 pb-3">
                {items.map((item, idx) => {
                    const Icon = item.icon ?? (item.depth ? Folder : FolderOpen)
                    const hasChildren = item.depth === 0 && item.label !== 'Recently Deleted'

                    return (
                        <button
                            key={idx}
                            className={cn(
                                'group flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm hover:bg-(--color-sidebar-accent)',
                                item.active && 'bg-(--color-sidebar-accent)'
                            )}>
                            {hasChildren ? (
                                <ChevronDown className="size-4 text-muted-foreground" />
                            ) : item.depth ? (
                                <ChevronRight className="size-4 text-muted-foreground" />
                            ) : (
                                <span className="w-4" />
                            )}
                            <Icon className="size-4" />
                            <span className={cn('truncate', item.active && 'font-medium')}>{item.label}</span>
                        </button>
                    )
                })}
            </nav>

            <div className="mt-6 border-t border-(--color-sidebar-border) px-2 pt-3">
                <div className="mb-2 flex items-center justify-between px-1 text-sm text-muted-foreground">
                    <span>Collections</span>
                    <Plus className="size-4" />
                </div>
            </div>
        </aside>
    )
}
