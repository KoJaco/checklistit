import Dexie, { Table } from 'dexie';
import type { Board } from '@/core/types/kanbanBoard';

export interface Boards {
    [id: string]: Board;
}

export interface KanbanBoard {
    boards: Boards;
}

export class KanbanBoardDexie extends Dexie {}
