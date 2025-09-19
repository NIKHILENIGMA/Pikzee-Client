// src/extensions/extensions.ts
import { Color } from '@tiptap/extension-color'
import { Highlight } from '@tiptap/extension-highlight'
import { Image } from '@tiptap/extension-image'
import { Link } from '@tiptap/extension-link'
import { Placeholder } from '@tiptap/extension-placeholder'
import { TaskItem } from '@tiptap/extension-task-item'
import { TaskList } from '@tiptap/extension-task-list'
import { TextStyle } from '@tiptap/extension-text-style'
import { Underline } from '@tiptap/extension-underline'
import { StarterKit } from '@tiptap/starter-kit'

import SlashCommand from './slash-command'

export const defaultExtensions = [
    StarterKit.configure({
        bulletList: {
            keepMarks: true,
            keepAttributes: false
        },
        orderedList: {
            keepMarks: true,
            keepAttributes: false
        }
    }),
    SlashCommand,
    Placeholder.configure({
        placeholder: ({ node }) => {
            if (node.type.name === 'heading') {
                return `Heading ${node.attrs.level}`
            }
            return "Press '/' for commands..."
        },
        includeChildren: true
    }),
    // SlashCommand,
    Image.configure({
        allowBase64: true,
        HTMLAttributes: {
            class: 'rounded-lg border border-stone-200'
        }
    }),
    Link.configure({
        HTMLAttributes: {
            class: 'text-stone-400 underline underline-offset-[3px] hover:text-stone-600 transition-colors cursor-pointer'
        }
    }),
    TaskList.configure({
        HTMLAttributes: {
            class: 'not-prose pl-2'
        }
    }),
    TaskItem.configure({
        HTMLAttributes: {
            class: 'flex items-start my-4'
        },
        nested: true
    }),
    Underline,
    TextStyle,
    Color,
    Highlight.configure({
        multicolor: true
    })
]
