import Dexie, { Table } from 'dexie';
import { Boards } from '@/core/types/kanbanBoard';

export class KanbanBoardDexie extends Dexie {
    boards!: Table<Boards>;

    constructor() {
        super('checklistitDB');
        this.version(1).stores({
            boards: '++id, title, tag, updatedAt', // primary key and indexed props
        });
    }
}

export const db = new KanbanBoardDexie();
