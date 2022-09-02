import { Board } from '@/core/types/kanbanBoard';

export function initializeBoard(currentTime: string): Board {
    return {
        title: '',
        slug: '',
        createdAt: currentTime,
        updatedAt: currentTime,
        tasks: {
            'task-1': { id: 1, content: '' },
        },
        columns: {
            'column-1': {
                id: 'column-1',
                title: '',
                bgColor: '',
                taskIds: ['task-1'],
            },
        },
        columnOrder: ['column-1'],
    };
}
