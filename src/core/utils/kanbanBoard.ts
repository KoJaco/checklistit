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

export function stringToSlug(str: string, separator: '-' | '_' = '-') {
    let slug = str
        .toString()
        .normalize('NFD') // split accented letter into the base letter and accent
        .replace(/[\u0300-\u036f]/g, '') // remove all previously split accents
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '')
        .replace(/--+/g, separator);
    return slug;
}
