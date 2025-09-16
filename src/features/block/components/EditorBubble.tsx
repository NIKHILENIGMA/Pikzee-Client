// src/components/editor/EditorBubble.tsx
import { BubbleMenu } from '@tiptap/react/menus'
import type { Editor } from '@tiptap/react'

interface EditorBubbleProps {
    editor: Editor
}

export const EditorBubble = ({ editor }: EditorBubbleProps) => {
    return (
        <BubbleMenu
            editor={editor}
            className="flex w-fit divide-x divide-stone-200 rounded border border-stone-200 bg-black shadow-xl">
            <div className="flex items-center gap-2 p-2">
                <button>
                    <strong>B</strong>
                </button>
                <button>
                    <strong>I</strong>
                </button>
                <button>
                    <strong>U</strong>
                </button>
            </div>
        </BubbleMenu>
    )
}
