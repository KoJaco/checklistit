import { createContext } from 'react';

import type {
    TTask,
    TColumn,
    Board,
    Tasks,
    Columns,
    ColumnOrder,
} from '@/core/types/kanbanBoard';

import { kanbanBoardMockData } from '@/static/ts/initialData';

// types
export type TaskBoardState = {
    title: string;
    createdAt: string;
    updatedAt: string;
    currentTaskId: string;
    tasks: Tasks;
    currentColumnId: string;
    columnTitle: string;
    columns: Columns;
    columnOrder: ColumnOrder;
};

type Action =
    | {
          // Input action, name="title"
          type: 'SET_BOARD_TITLE';
          payload: {
              // 'title'
              key: string;
              //   title content
              value: string;
          };
      }
    | {
          type: 'SET_CREATED_AT';
          payload: {
              // 'createdAt
              key: string;
              value: string;
          };
      }
    | {
          type: 'SET_UPDATED_AT';
          payload: {
              // 'updatedAt
              key: string;
              value: string;
          };
      }
    | {
          type: 'CURRENT_TASK_ID';
          payload: {
              // currentTaskId
              key: string;
              value: string;
          };
      }
    | {
          type: 'SET_CREATED_AT';
          payload: {
              key: string;
              value: string;
          };
      }
    | {
          type: 'SET_CURRENT_TASK_ID';
          payload: {
              key: string;
              value: string;
          };
      }
    | {
          type: 'SET_CURRENT_COLUMN_ID';
          payload: {
              key: string;
              value: string;
          };
      }
    | {
          type: 'ADD_TASK';
          payload: {
              key: string;
              value: TTask;
          };
      }
    | {
          type: 'REMOVE_TASK';
          payload: {
              key: string;
              value: string;
          };
      }
    | {
          type: 'ADD_COLUMN';
          payload: {
              key: string;
              value: TColumn;
          };
      }
    | {
          type: 'REMOVE_COLUMN';
          payload: {
              key: string;
              value: string;
          };
      }
    | {
          type: 'SET_COLUMN_BG';
          payload: {
              key: string;
              value: string;
          };
      }
    | {
          type: 'SAVE_BOARD';
          payload: {
              key: string;
              value: Board;
          };
      }
    | { type: 'RESET' };

export const initialValues = {
    title: 'Weekly Work',
    createdAt: '29/08/2022, 09:37:01',
    updatedAt: '29/08/2022, 14:12:15',
    currentTaskId: 'task-1',
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
    currentColumnId: 'column-1',
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

// State reducer
export const reducer = (state: TaskBoardState, action: Action) => {
    switch (action.type) {
        case 'SET_BOARD_STATE': {
            return { ...state, [action.payload.key]: action.payload.value };
        }
        case 'SET_BOARD_TITLE': {
            return { ...state, [action.payload.key]: action.payload.value };
        }
        case 'SET_COLUMN_TITLE': {
            return { ...state, [action.payload.key]: action.payload.value };
        }
        case 'SET_CURRENT_TASK_ID': {
            return { ...state, [action.payload.key]: action.payload.value };
        }
        case 'SET_CURRENT_COLUMN_ID': {
            return { ...state, [action.payload.key]: action.payload.value };
        }
        case 'ADD_TASK': {
            return { ...state, [action.payload.key]: action.payload.value };
        }
        case 'REMOVE_TASK': {
            return { ...state, [action.payload.key]: action.payload.value };
        }
        case 'ADD_COLUMN': {
            return { ...state, [action.payload.key]: action.payload.value };
        }
        case 'REMOVE_COLUMN': {
            return { ...state, [action.payload.key]: action.payload.value };
        }
        case 'SET_COLUMN_BG': {
            return { ...state, [action.payload.key]: action.payload.value };
        }

        case 'SAVE_BOARD': {
            return { ...state, [action.payload.key]: action.payload.value };
        }
        case 'RESET': {
            return initialValues;
        }
        default: {
            // @ts-ignore
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
};
