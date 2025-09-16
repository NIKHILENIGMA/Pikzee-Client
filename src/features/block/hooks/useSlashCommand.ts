import type { Editor } from "@tiptap/core";
import { useEffect } from "react";
import { useEditorCommand } from "./useEditorCommand";
import type { CommandItem, SlashRenderProps } from "../types/blocks";


export const useSlashCommand = (editor: Editor | null) => {
  const {
    state,
    dispatch,
    selectCurrent,
    navigateUp,
    navigateDown,
    executeCommand,
  } = useEditorCommand();

  useEffect(() => {
    if (!editor) return;

    const slashCommand = editor.extensionManager.extensions.find(
      (ext) => ext.name === "slashCommand"
    );

    if (slashCommand) {
      const toCoords = (clientRect?: () => DOMRect | null) => {
        const r = clientRect?.();
        return r
          ? { x: r.left, y: r.bottom } // under the caret
          : null;
      };

      slashCommand.options.onOpen = (props: SlashRenderProps) => {
        dispatch({
          type: "OPEN_MENU",
          payload: { items: props.items, range: props.range },
        });
        dispatch({ type: "SET_QUERY", payload: props.query ?? "" });
        dispatch({ type: "SET_POSITION", payload: toCoords(props.clientRect) ?? { x: 0, y: 0 } });
      };

      slashCommand.options.onUpdate = (props: SlashRenderProps) => {
        dispatch({ type: "FILTER_ITEM", payload: props.items ?? [] });
        dispatch({ type: "SET_QUERY", payload: props.query ?? "" });
        dispatch({
          type: "OPEN_MENU",
          payload: { items: props.items ?? [], range: props.range },
        });
        dispatch({ type: "SET_POSITION", payload: toCoords(props.clientRect) ?? { x: 0, y: 0 } });
      };

      slashCommand.options.onClose = () => {
        dispatch({ type: "CLOSE_MENU" });
      };
    } else {
      // (Optional) quick sanity log
      return;
    }
  }, [editor, dispatch]);

  const handleKeyPress = (event: KeyboardEvent) => {
    if (!state.isOpen) return false;

    switch (event.key) {
      case "ArrowUp":
        event.preventDefault();
        navigateUp();
        return true;

      case "ArrowDown":
        event.preventDefault();
        navigateDown();
        return true;

      case "Enter":
        event.preventDefault();
        if (editor) selectCurrent(editor);
        return true;

      case "Escape":
        event.preventDefault();
        dispatch({ type: "CLOSE_MENU" });
        return true;

      default:
        break;
    }
  };

  return {
    ...state,
    handleKeyPress,
    executeCommand: (item: CommandItem) => {
      if (editor) {
        executeCommand(item, editor);
      }
    },
  };
};
