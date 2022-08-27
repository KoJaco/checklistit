import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import BaseLayout from '@/layouts/BaseLayout';

import { DragDropContext, DropResult } from 'react-beautiful-dnd';

import type { Board } from '@/components/kanbanBoard/types';

const Column = dynamic(() => import('@/components/kanbanBoard/Column'), {
    ssr: false,
});

const Kanban = dynamic(() => import('@/components/kanbanBoard/Kanban'), {
    ssr: false,
});

const initialData = {
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

const Home: NextPage = () => {
    const [boardState, setBoardState] = useState(initialData);
    const [isCSR, setIsCSR] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setIsCSR(true);
        }
    }, []);

    const onDragEnd = (result: DropResult) => {
        const { destination, source, draggableId, type } = result;

        if (!destination) return;

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        // handle re-ordering for a column

        if (type === 'column') {
            const newColumnOrder = Array.from(boardState.columnOrder);
            newColumnOrder.splice(source.index, 1);
            newColumnOrder.splice(destination.index, 0, draggableId);

            const newState = {
                ...boardState,
                columnOrder: newColumnOrder,
            };
            setBoardState(newState);
            return;
        }

        const startColumn = boardState.columns[source.droppableId];
        const finishColumn = boardState.columns[destination.droppableId];

        if (startColumn === finishColumn) {
            // create new task id array
            const newTaskIds = Array.from(startColumn.taskIds);
            // move task id from old index to new index
            newTaskIds.splice(source.index, 1);
            newTaskIds.splice(destination.index, 0, draggableId);

            const newColumn = {
                ...startColumn,
                taskIds: newTaskIds,
            };

            const newState = {
                ...boardState,
                columns: {
                    ...boardState.columns,
                    [newColumn.id]: newColumn,
                },
            };

            setBoardState(newState);
            return;
        }

        // moving from one column to another
        const startTaskIds = Array.from(startColumn.taskIds);
        startTaskIds.splice(source.index, 1);

        const newStartColumn = {
            ...startColumn,
            taskIds: startTaskIds,
        };

        const finishTaskIds = Array.from(finishColumn.taskIds);
        finishTaskIds.splice(destination.index, 0, draggableId);
        const newFinishColumn = {
            ...finishColumn,
            taskIds: finishTaskIds,
        };

        const newState = {
            ...boardState,
            columns: {
                ...boardState.columns,
                [newStartColumn.id]: newStartColumn,
                [newFinishColumn.id]: newFinishColumn,
            },
        };
        setBoardState(newState);
    };
    return (
        <>
            <BaseLayout>
                <main className="container mx-auto flex flex-col items-center justify-center h-screen p-10 dark:bg-main-dark-bg">
                    <div className="w-full h-auto mt-20 p-2">
                        {/* Kanban component */}
                        <DragDropContext
                            onDragEnd={onDragEnd}
                            // onDragStart={onDragStart}
                            // onDragUpdate={onDragUpdate}
                        >
                            <Kanban
                                title="Title"
                                boardState={boardState}
                                setBoardState={setBoardState}
                            />
                        </DragDropContext>
                    </div>
                </main>
            </BaseLayout>
        </>
    );
};

export default Home;
