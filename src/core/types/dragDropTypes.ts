export type Children = Array<TItem>;

export type TItem = {
    type: 'row' | 'column' | 'columnItem' | 'columnTemplateItem';
    id: string;
    depth?: 1 | 2 | 3;
    column?: {
        identifier: string;
        title: string;
    };
    children?: Children | undefined;
};

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

export type TDropZone = {
    path: string;
};

// Layout has recursive relationship... there is no difference between layout and children.
export type TLayout = Array<TItem>;
