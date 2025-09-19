import type { Editor } from '@tiptap/react'
import { useReducer, type FC, type ReactNode } from 'react'

import { EditorCommandContext } from '../hooks/useEditorCommand'
import type { CommandAction, CommandItem, CommandState } from '../types/blocks'

export interface EditorCommandContextProps {
    children: ReactNode
}

/**
 * Initial state for the editor command context.
 * This state represents the default values for the command menu's visibility,
 * query input, selected item index, and other relevant properties.
 */
const initialState: CommandState = {
    isOpen: false,
    query: '',
    selectedIndex: 0,
    items: [],
    range: { from: 0, to: 0 },
    position: { x: 0, y: 0 }
}

/**
 * Reducer function that manages the command menu state transitions.
 *
 * This reducer handles various actions to control the visibility, content,
 * and navigation state of a command menu interface. It follows immutable
 * state update patterns by returning new state objects.
 *
 * @param state - The current command state containing menu visibility, items, selection, and query information
 * @param action - The action object containing the type and optional payload to modify the state
 * @returns The new command state after applying the specified action
 *
 * @example
 * ```typescript
 * const newState = commandReducer(currentState, {
 *   type: 'OPEN_MENU',
 *   payload: { items: menuItems, range: { from: 10, to: 15 } }
 * });
 * ```
 */

const commandReducer = (state: CommandState, action: CommandAction): CommandState => {
    switch (action.type) {
        case 'OPEN_MENU':
            return {
                ...state,
                isOpen: true,
                items: action.payload.items,
                range: action.payload.range
            }
        case 'CLOSE_MENU':
            return {
                ...state,
                isOpen: false,
                query: '', // Reset the query when closing the menu
                selectedIndex: 0, // Reset the selected index when closing the menu
                range: { from: 0, to: 0 } // Reset the range when closing the menu
            }
        case 'SET_QUERY':
            return { ...state, query: action.payload, selectedIndex: 0 }
        case 'SET_SELECTED_INDEX':
            return {
                ...state,
                selectedIndex: Math.max(0, Math.min(action.payload, state.items.length - 1)) // Wrap the selected index within the bounds of the items array for navigation
            }
        case 'FILTER_ITEM':
            return { ...state, items: action.payload, selectedIndex: 0 }

        case 'SET_POSITION':
            return { ...state, position: action.payload }
        default:
            return state
    }
}

/**
 * Provider component that manages the editor command context state and provides
 * command execution and navigation functionality.
 *
 * This component wraps child components with an EditorCommandContext.Provider,
 * enabling access to command state management, item selection, and keyboard
 * navigation within editor command menus.
 *
 * @param props - The component props
 * @param props.children - Child components that will have access to the editor command context
 * @returns JSX element wrapping children with the editor command context provider
 *
 * @example
 * ```tsx
 * <EditorCommandProvider>
 *   <CommandMenu />
 *   <Editor />
 * </EditorCommandProvider>
 * ```
 */
const EditorCommandProvider: FC<EditorCommandContextProps> = ({ children }) => {
    const [state, dispatch] = useReducer(commandReducer, initialState)
    // Execute the command for the selected item
    const executeCommand = (item: CommandItem, editor: Editor) => {
        item.command({ editor, range: state.range })
        dispatch({ type: 'CLOSE_MENU' })
    }

    // Handle navigation up  //e.g. keyboard arrow up
    const navigateUp = () => {
        dispatch({
            type: 'SET_SELECTED_INDEX',
            payload: state.selectedIndex - 1
        })
    }

    // Handle navigation down  //e.g. keyboard arrow down
    const navigateDown = () => {
        dispatch({
            type: 'SET_SELECTED_INDEX',
            payload: state.selectedIndex + 1
        })
    }

    // Handle selection of the current item
    const selectCurrent = (editor: Editor) => {
        if (state.items[state.selectedIndex]) {
            executeCommand(state.items[state.selectedIndex], editor)
        }
    }

    const value = {
        state,
        dispatch,
        executeCommand,
        navigateUp,
        navigateDown,
        selectCurrent
    }
    return <EditorCommandContext.Provider value={value}>{children}</EditorCommandContext.Provider>
}

export default EditorCommandProvider
