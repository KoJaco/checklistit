// import { v4 as uuidv4 } from 'uuid';
import shortid from 'shortid';

export const COLUMN_TEMPLATE_ITEM = 'columnTemplateItem';
export const ROW = 'row';
export const COLUMN = 'column';
export const COMPONENT = 'component';

export const COLUMN_TEMPLATE_ITEMS = [
    {
        // id: uuidv4(),
        id: shortid.generate(),
        type: COLUMN_TEMPLATE_ITEM,
        component: {
            type: 'toDo',
            content: 'To Do List',
        },
    },
    {
        id: shortid.generate(),
        type: COLUMN_TEMPLATE_ITEM,
        component: {
            type: 'progress',
            content: 'In Progress',
        },
    },
    {
        id: shortid.generate(),
        type: COLUMN_TEMPLATE_ITEM,
        component: {
            type: 'completed',
            content: 'Done',
        },
    },
    {
        id: shortid.generate(),
        type: COLUMN_TEMPLATE_ITEM,
        component: {
            type: 'reminders',
            content: 'Remember these!',
        },
    },
];
