export type Column = {
    // id automatically set with title + random string
    id: string;
    // user defined title
    title: string;
};

export type Task = {
    // numerical id
    id: string;
    // FK relationship to Column
    columnId: string;
    // text inputted by user
    content: string;
};

export const ItemTypes = {
    LIST_ITEM: 'listItem',
};
