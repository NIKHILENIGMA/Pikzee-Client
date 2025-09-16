import { type ComponentType } from "react";
import type { Editor, Range } from "@tiptap/react";

export interface CommandState {
  isOpen: boolean;
  query: string;
  selectedIndex: number;
  items: CommandItem[];
  range: Range;
  position: { x: number; y: number };
}

export type SlashRenderProps = {
  query: string;
  range: { from: number; to: number };
  items: CommandItem[];
  // optional but common:
  clientRect?: () => DOMRect | null;
};

export type CommandAction =
  | {
      type: "OPEN_MENU";
      payload: { items: CommandItem[]; range: Range };
    }
  | { type: "CLOSE_MENU" }
  | { type: "SET_QUERY"; payload: string }
  | { type: "SET_SELECTED_INDEX"; payload: number }
  | { type: "FILTER_ITEM"; payload: CommandItem[] }
  | { type: "SET_POSITION"; payload: { x: number; y: number } };

export interface CommandItem {
  title: string;
  description?: string;
  icon: ComponentType;
  command: ({ editor, range }: { editor: Editor; range: Range }) => void;
  searchTerms?: string[];
}

export interface EditorCommandContextType {
  state: CommandState;
  dispatch: React.Dispatch<CommandAction>;
  executeCommand: (item: CommandItem, editor: Editor) => void;
  navigateUp: () => void;
  navigateDown: () => void;
  selectCurrent: (editor: Editor) => void;
}
