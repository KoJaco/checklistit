export type TBoard = {};

export type TColumn = {
    id: string;
    title: string;
    bgColor?: string;
    taskIds: Array<number> | Array<undefined>;
};

export type TColumnItem = {};

export type TTask = {
    id: string;
    content: string;
};

interface Tasks {
    [key: number]: TTask;
}

interface Columns {
    [key: string]: TColumn;
}

export type BoardLayout = {
    tasks: Tasks;
    columns: Columns;
    columnOrder: Array<string>;
};

// const result = {
//     draggableId: 'task-1',
//     type: 'TYPE',
//     reason: 'DROP',
//     source: {
//         droppableId: 'column-1',
//         index: 0,
//     },
//     destination: {
//         droppableId: 'column-1',
//         index: 1,
//     }
// }

// const initialData = {
//     tasks: {
//         1: { id: 1, content: 'Configure Next.js application' },
//         2: {
//             id: 2,
//             content: 'Configure Next.js and tailwind ',
//         },
//         3: {
//             id: 3,
//             content: 'Create sidebar navigation menu',
//         },
//         4: { id: 4, content: 'Create page footer' },
//         5: { id: 5, content: 'Create page navigation menu' },
//         6: { id: 6, content: 'Create page layout' },
//     },
//     columns: {
//         'column-1': {
//             id: 'column-1',
//             title: 'To Do',
//             bgColor: '',
//             taskIds: [1, 2, 3, 4, 5, 6],
//         },
//         'column-2': {
//             id: 'column-2',
//             bgColor: '',
//             title: 'In Progress',
//             taskIds: [],
//         },
//         'column-3': {
//             id: 'column-3',
//             bgColor: '',
//             title: 'Complete',
//             taskIds: [],
//         },
//     },
//     // Facilitate reordering of the columns
//     columnOrder: ['column-1', 'column-2', 'column-3'],
// };

// const initialData = {
//     tasks: [
//         { id: '1', content: 'Configure Next.js application' },
//         {
//             id: '2',
//             content: 'Configure Next.js and tailwind ',
//         },
//         {
//             id: '3',
//             content: 'Create sidebar navigation menu',
//         },
//         { id: '4', content: 'Create page footer' },
//         { id: '5', content: 'Create page navigation menu' },
//         { id: '6', content: 'Create page layout' },
//     ],

//     columns: [
//         {
//             id: 'column-1',
//             title: 'To Do',
//             bgColor: '',
//             taskIds: [1, 2, 3, 4, 5, 6],
//         },
//         {
//             id: 'column-2',
//             bgColor: '',
//             title: 'In Progress',
//             taskIds: [],
//         },
//         {
//             id: 'column-3',
//             bgColor: '',
//             title: 'Complete',
//             taskIds: [],
//         },
//     ],
//     // Facilitate reordering of the columns
//     columnOrder: ['column-1', 'column-2', 'column-3'],
// };
