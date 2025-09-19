import { createContext, useContext } from 'react'

import type { EditorCommandContextType } from '../types/blocks'

/**
 * React context for providing editor command functionality throughout the component tree.
 *
 * This context allows components to access and execute editor commands without
 * prop drilling. The context value can be null when used outside of a provider.
 *
 * @example
 * ```typescript
 * const editorCommands = useContext(EditorCommandContext);
 * if (editorCommands) {
 *   editorCommands.executeCommand('bold');
 * }
 * ```
 */

export const EditorCommandContext = createContext<EditorCommandContextType | null>(null)

/**
 * Hook to access the editor command context.
 *
 * This hook provides access to the editor command functionality through the
 * EditorCommandContext. It must be used within a component that is wrapped
 * by an EditorCommandProvider.
 *
 * @returns The editor command context value
 * @throws {Error} When used outside of an EditorCommandProvider
 *
 * @example
 * ```typescript
 * const editorCommand = useEditorCommand();
 * editorCommand.executeCommand('bold');
 * ```
 */

export const useEditorCommand = () => {
    const context = useContext(EditorCommandContext)
    if (!context) {
        throw new Error('useEditorCommand must be used within an EditorCommandProvider')
    }
    return context
}
