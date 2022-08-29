export type TTask = {
    id: number;
    content: string;
};

export interface Tasks {
    [id: string]: TTask;
}

export type TaskId = keyof Tasks;

export type TColumn = {
    id: string;
    title: string;
    bgColor: string;
    taskIds: string[];
};

export interface Columns {
    [id: string]: TColumn;
}

export type ColumnId = keyof Columns;

export type ColumnOrder = Array<keyof Columns>;

export interface Board {
    // direct data
    title: string;
    createdAt: string;
    updatedAt: string;
    tasks: Tasks;
    columns: Columns;
    columnOrder: ColumnOrder;
}

export interface DbBoard {
    // direct data
    title: string;
    createdAt: string;
    updatedAt: string;
    // nested objects
    tasks: Tasks;
    columns: Columns;
    columnOrder: ColumnOrder;
}
