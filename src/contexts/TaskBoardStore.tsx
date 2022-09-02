import create from 'zustand';

// *** Store is simply for keeping track of import values relating to server-client state, use react-query with dexie to maintain server-client board state.

type State = {
    columnCount: number;
    taskCount: number;
    currentColumnId: string;
    currentTaskId: string;
};

const useTaskBoardStore = create((set) => ({
    // on board creation there should always be 1 column and 1 task
    // deleting this last task/column is not allowed
    columnCount: 1,
    taskCount: 1,
    currentColumnId: 'column-1',
    currentTaskId: 'task-1',
    increaseColumnCount: () =>
        set((state: State) => ({ columnCount: state.columnCount + 1 })),
    decreaseColumnCount: () =>
        set((state: State) => ({ columnCount: state.columnCount - 1 })),
    increaseTaskCount: () =>
        set((state: State) => ({ columnCount: state.columnCount + 1 })),
    decreaseTaskCount: () =>
        set((state: State) => ({ columnCount: state.columnCount - 1 })),
    resetCounts: () => set({ columnCount: 1, taskCount: 1 }),
    setCurrentColumn: (column: string) =>
        set(() => ({ currentColumnId: column })),
    setCurrentTask: (task: string) => set(() => ({ currentTaskId: task })),
}));

export default useTaskBoardStore;
