// const boardState = {
//     'board-'
// }

export const initializedBoard = {
    id: 'V1StGXR8_Z5jdHi6B-myT',
    title: '',
    createdAt: '29/08/2022, 09:37:01',
    updatedAt: '29/08/2022, 14:12:15',
    tasks: {
        'task-1': { id: 1, content: '' },
    },
    columns: {
        'column-1': {
            id: 1,
            content: '',
        },
    },
    columnOrder: ['column-1'],
};

export const kanbanBoardMockData = {
    id: 'board-1',
    title: 'Weekly work',
    createdAt: '29/08/2022, 09:37:01',
    updatedAt: '29/08/2022, 14:12:15',
    tasks: {
        'task-1': { id: 1, content: 'Configure Next.js application' },
        'task-2': {
            id: 2,
            content: 'Configure Next.js and tailwind ',
        },
        'task-3': {
            id: 3,
            content: 'Create sidebar navigation menu',
        },
        'task-4': { id: 4, content: 'Create page footer' },
        'task-5': { id: 5, content: 'Create page navigation menu' },
        'task-6': { id: 6, content: 'Create page layout' },
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'To Do',
            bgColor: '',
            taskIds: [
                'task-1',
                'task-2',
                'task-3',
                'task-4',
                'task-5',
                'task-6',
            ],
        },
        'column-2': {
            id: 'column-2',
            title: 'In Progress',
            bgColor: '',
            taskIds: [],
        },
        'column-3': {
            id: 'column-3',
            title: 'Complete',
            bgColor: '',
            taskIds: [],
        },
    },
    // Facilitate reordering of the columns
    columnOrder: ['column-1', 'column-2', 'column-3'],
};

export const kanbanBoardInitialData = {
    'board-1': {
        title: 'Weekly work',
        createdAt: '29/08/2022, 09:37:01',
        updatedAt: '29/08/2022, 14:12:15',
        tasks: {
            'task-1': { id: 1, content: 'Configure Next.js application' },
            'task-2': {
                id: 2,
                content: 'Configure Next.js and tailwind ',
            },
            'task-3': {
                id: 3,
                content: 'Create sidebar navigation menu',
            },
        },
        columns: {
            'column-1': {
                id: 'column-1',
                title: 'To Do',
                bgColor: '',
                taskIds: [
                    'task-1',
                    'task-2',
                    'task-3',
                    'task-4',
                    'task-5',
                    'task-6',
                ],
            },
            'column-2': {
                id: 'column-2',
                title: 'In Progress',
                bgColor: '',
                taskIds: [],
            },
            'column-3': {
                id: 'column-3',
                title: 'Complete',
                bgColor: '',
                taskIds: [],
            },
        },
        columnOrder: ['column-1', 'column-2', 'column-3'],
    },
};
