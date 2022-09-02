import Dexie, { Table } from 'dexie';
import { Boards, Board, TColumn, TTask } from '@/core/types/kanbanBoard';

// https://dexie.org/docs/Version/Version.stores()

export class KanbanBoardDexie extends Dexie {
    boards!: Table<Board>;

    constructor() {
        super('checklistitDB');
        this.version(1).stores({
            boards: '++id, title, tag, updatedAt', // primary key and indexed props
        });
        // get a Dexie Table object, which is a class that represents our object store
        // this means we can interact with the boards object store using this.boards.add(), etc.
        this.boards = this.table('boards');
    }

    getRecentBoards(howMany: number) {
        return howMany <= 1
            ? this.boards.orderBy('updatedAt').reverse().limit(1).toArray()
            : this.boards
                  .orderBy('updatedAt')
                  .reverse()
                  .limit(howMany)
                  .toArray();
    }

    getBoardsByTag(boardTag: string) {
        return this.boards
            .orderBy('updatedAt')
            .reverse()
            .filter((board) => {
                return board.tag === boardTag;
            });
    }

    getAllBoards(reverseOrder: boolean) {
        return reverseOrder
            ? this.boards.orderBy('updatedAt').reverse().toArray()
            : this.boards.orderBy('updatedAt').toArray();
    }

    addBoard(boardTitle: string, boardTag: string) {
        // initialising a board after use inputs a title and a tag
        // returns a promise that resolves when the underlying indexedDB request succeeds.
        // use promise chaining or async/await pattern.
        return this.boards.add({
            title: boardTitle,
            tag: boardTag,
            createdAt: new Date(Date.now()).toLocaleDateString(),
            updatedAt: new Date(Date.now()).toLocaleDateString(),
            tasks: { 'task-1': { id: 1, content: '' } },
            columns: {
                'column-1': {
                    id: 'column-1',
                    title: '',
                    bgColor: '',
                    taskIds: ['task-1'],
                },
            },
            columnOrder: ['task-1'],
        });
    }

    updateBoard(board: Board) {}

    addColumn(columnId: string) {}

    updateColumn(column: TColumn) {}

    updateTask(task: TTask) {}

    addTask(taskId: number, taskContent: string) {}
}

export const db = new KanbanBoardDexie();
