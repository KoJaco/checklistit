import { COLUMN_ITEM, ROW, COLUMN } from '@/core/constants/dragDropConsts';

export const initialData = {
    layout: [
        {
            type: ROW,
            id: 'row0',
            depth: 1,
            children: [
                {
                    type: COLUMN,
                    id: 'column0',
                    depth: 2,
                    identifier: '',
                    title: '',
                    children: [
                        {
                            type: COLUMN_ITEM,
                            depth: 3,
                            id: 'columnItem0',
                        },
                        {
                            type: COLUMN_ITEM,
                            depth: 3,
                            id: 'columnItem1',
                        },
                    ],
                },
                {
                    type: COLUMN,
                    id: 'column1',
                    identifier: '',
                    title: '',
                    depth: 2,

                    children: [
                        {
                            type: COLUMN_ITEM,
                            depth: 3,

                            id: 'columnItem2',
                        },
                    ],
                },
            ],
        },
        {
            type: ROW,
            id: 'row1',
            depth: 1,
            children: [
                {
                    type: COLUMN,
                    id: 'column2',
                    depth: 2,
                    identifier: '',
                    title: '',
                    children: [
                        {
                            type: COLUMN_ITEM,
                            depth: 3,

                            id: 'columnItem3',
                        },
                        {
                            type: COLUMN_ITEM,
                            depth: 3,
                            id: 'columnItem0',
                        },
                        {
                            type: COLUMN_ITEM,
                            depth: 3,

                            id: 'columnItem2',
                        },
                    ],
                },
            ],
        },
    ],
    columnItems: {
        columnItem0: {
            id: 'columnItem0',
            title: 'My First Note',
            content: 'Some random content description of, numero uno!',
        },
        columnItem1: {
            id: 'columnItem1',
            title: 'My 2nd Note',
            content: 'I am just gonna so whatever I want here.',
        },
        columnItem2: {
            id: 'columnItem2',
            title: 'It would be awesome if I could get this done today.',
            content: 'Some email',
        },
        columnItem3: {
            id: 'columnItem3',
            title: 'name',
            content: 'What do you think of this?',
        },
        columnItem4: {
            id: 'columnItem4',
            title: 'My 4th descriptive title',
            content: 'Hellloooooo there!!!!',
        },
    },
};
