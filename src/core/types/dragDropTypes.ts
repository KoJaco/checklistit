export type Children = Array<Item>;

export interface Item {
    type: string;
    id: string;
    depth?: 1 | 2 | 3;
    children?: Children;
}

export type TRow = {
    type: 'row';
    id: string;
    depth?: 1;
    children?: Children;
};

export type TColumn = {
    type: 'column';
    id: string;
    depth?: 2;
    children?: Children;
};

export type TColumnItem = {
    type: 'columnItem';
    id: string;
    depth?: 3;
};

export type TColumnItemComponent = {
    id: string;
    title: string;
    content: string;
};

// Layout has recursive relationship... there is no difference between layout and children.
export type TLayout = Array<Item>;
