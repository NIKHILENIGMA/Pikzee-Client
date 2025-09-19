import { Extension } from '@tiptap/core'
import Suggestion from '@tiptap/suggestion'

import type { CommandItem, SlashRenderProps } from '../types/blocks'
import { getSuggestionItems } from '../util/suggestion-items'

interface SlashCommandOptions {
    onOpen?: (props: SlashRenderProps) => void
    onClose?: () => void
    onUpdate?: (props: SlashRenderProps) => void
}

const SlashCommand = Extension.create<SlashCommandOptions>({
    name: 'slashCommand',

    addOptions() {
        return {
            onOpen: () => {},
            onClose: () => {},
            onUpdate: () => {}
        }
    },

    addProseMirrorPlugins() {
        return [
            Suggestion({
                editor: this.editor,
                char: '/',
                allowSpaces: false,
                startOfLine: false,
                decorationTag: 'span',
                decorationClass: 'slash-command-decoration',

                command: ({ editor, range, props }) => {
                    props.command({ editor, range })
                },

                // Suggestion items
                items: ({ query }) => {
                    const allItems = getSuggestionItems()

                    if (!query) return allItems.slice(0, 10)

                    return allItems
                        .filter((item) => {
                            const searchText = query.toLowerCase()
                            return (
                                item.title.toLowerCase().includes(searchText) ||
                                item.description.toLowerCase().includes(searchText) ||
                                item.searchTerms?.some((term) => term.toLowerCase().includes(searchText))
                            )
                        })
                        .slice(0, 10)
                },

                render: () => ({
                    onStart: (props) => {
                        this.options.onOpen?.({
                            query: props.query ?? '',
                            range: props.range,
                            items: (props.items ?? []) as CommandItem[],
                            clientRect: props.clientRect || undefined
                        })
                    },
                    onUpdate: (props) => {
                        this.options.onUpdate?.({
                            query: props.query ?? '',
                            range: props.range,
                            items: (props.items ?? []) as CommandItem[],
                            clientRect: props.clientRect || undefined
                        })
                    },
                    onKeyDown: () => false,
                    onExit: () => this.options.onClose?.()
                })
            })
        ]
    }
})

export default SlashCommand
