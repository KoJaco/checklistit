import create from 'zustand';

// *** Store is simply for keeping track of import values relating to server-client state, use react-query with dexie to maintain server-client board state.

export type State = {
    boardCount: number | undefined;
    columnCount: number;
    taskCount: number;
    currentColumnId: string;
    currentTaskId: string;
    showColorPicker: boolean;
    showNotification: boolean;

    setBoardCount: (count: number) => void;
    increaseBoardCount: () => void;
    decreaseBoardCount: () => void;
    increaseTaskCount: () => void;
    decreaseTaskCount: () => void;
    resetCounts: () => void;
    setCurrentColumnId: (column: string) => void;
    setCurrentTaskId: (task: string) => void;
    setShowColorPicker: (value: boolean) => void;
    toggleShowColorPicker: () => void;
    setShowNotification: (value: boolean) => void;
    toggleShowNotification: () => void;
};

export const useKanbanBoardStore = create<State>((set) => ({
    // on board creation there should always be 1 column and 1 task
    // deleting this last task/column is not allowed
    boardCount: undefined,
    columnCount: 1,
    taskCount: 1,
    currentColumnId: 'column-1',
    currentTaskId: 'task-1',
    showColorPicker: false,
    showNotification: false,

    setBoardCount: (count: number) => {
        set(() => ({ boardCount: count }));
    },
    // counts
    increaseBoardCount: () =>
        set((state) => ({
            boardCount:
                state.boardCount !== undefined ? state.boardCount + 1 : 1,
        })),
    decreaseBoardCount: () =>
        set((state) => ({
            boardCount:
                state.boardCount !== undefined
                    ? state.boardCount - 1
                    : state.boardCount,
        })),
    increaseColumnCount: () =>
        set((state) => ({ columnCount: state.columnCount + 1 })),
    decreaseColumnCount: () =>
        set((state) => ({ columnCount: state.columnCount - 1 })),
    increaseTaskCount: () =>
        set((state) => ({ columnCount: state.columnCount + 1 })),
    decreaseTaskCount: () =>
        set((state) => ({ columnCount: state.columnCount - 1 })),
    resetCounts: () => set({ columnCount: 1, taskCount: 1 }),
    // current task/col
    setCurrentColumnId: (column: string) =>
        set(() => ({ currentColumnId: column })),
    setCurrentTaskId: (task: string) => set(() => ({ currentTaskId: task })),
    // color picker
    setShowColorPicker: (value: boolean) =>
        set(() => ({ showColorPicker: value })),
    toggleShowColorPicker: () =>
        set((state) => ({ showColorPicker: !state.showColorPicker })),
    setShowNotification: (value: boolean) =>
        set(() => ({ showNotification: value })),
    toggleShowNotification: () =>
        set((state) => ({ showNotification: !state.showNotification })),
}));
