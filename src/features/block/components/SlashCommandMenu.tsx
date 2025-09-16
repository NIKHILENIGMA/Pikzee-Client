import type { Editor } from '@tiptap/core'
import { useEditorCommand } from '../hooks/useEditorCommand'
import { Command } from 'cmdk'

interface SlashCommandMenuProps {
    editor: Editor
}

const SlashCommandMenu = ({ editor }: SlashCommandMenuProps) => {
    const { state, executeCommand } = useEditorCommand()

    // Check if the command menu is open
    if (!state.isOpen) return null
    return (
        <Command
            className="absolute z-50 w-72 rounded-md border bg-gray-200 shadow-lg"
            style={{
                left: state.position?.x ?? 0,
                top: state.position?.y ?? 0
            }}>
            <Command.Input
                value={state.query}
                placeholder="Type a command..."
                className="w-full p-3 text-sm border-0 outline-none"
                readOnly
            />

            <Command.List className="max-h-80 overflow-y-auto p-1">
                {state.items.map((item, index) => (
                    <Command.Item
                        key={index}
                        className={`flex items-center gap-2 p-2 rounded cursor-pointer ${
                            index === state.selectedIndex ? 'bg-blue-100' : 'hover:bg-gray-100'
                        }`}
                        onSelect={() => executeCommand(item, editor)}>
                        <item.icon />
                        <div>
                            <div className="font-medium">{item.title}</div>
                            <div className="text-sm text-gray-500">{item.description}</div>
                        </div>
                    </Command.Item>
                ))}
            </Command.List>
        </Command>
    )
}

export default SlashCommandMenu
