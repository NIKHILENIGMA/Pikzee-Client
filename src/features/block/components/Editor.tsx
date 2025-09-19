// src/components/editor/Editor.tsx
import { EditorContent, useEditor } from '@tiptap/react'
import { useEffect } from 'react'

import EditorCommandProvider from '../context/EditorCommandContext'
import { defaultExtensions } from '../extensions/extensions'
import { useSlashCommand } from '../hooks/useSlashCommand'
import '../styles/prosemirror.css'

import SlashCommandMenu from './SlashCommandMenu'

export const EditorCore = () => {
    const editor = useEditor({
        extensions: defaultExtensions,
        content: '',
        editorProps: {
            attributes: {
                class: 'prose prose-lg prose-headings:font-title font-default focus:outline-none max-w-full'
            }
        }
    })

    const slashCommand = useSlashCommand(editor)

    // Attach keyboard handler
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            slashCommand.handleKeyPress(event as unknown as React.KeyboardEvent<Element>)
        }

        document.addEventListener('keydown', handleKeyDown)
        return () => document.removeEventListener('keydown', handleKeyDown)
    }, [slashCommand])

    return (
        <div className="relative w-[50%] h-screen bg-white flex items-start justify-start flex-col p-10">
            <EditorContent editor={editor} />
            <SlashCommandMenu editor={editor} />
        </div>
    )
}

export const Editor = () => {
    return (
        <EditorCommandProvider>
            <EditorCore />
        </EditorCommandProvider>
    )
}
