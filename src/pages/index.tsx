import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { trpc } from '@/core/utils/trpc';
import BaseLayout from '@/layouts/BaseLayout';

import { DragDropContext } from 'react-beautiful-dnd';
import Kanban from '@/components/kanbanBoard/Kanban';

const Column = dynamic(() => import('@/components/kanbanBoard/Column'), {
    ssr: false,
});

const reorderColumnList = (
    sourceCol: any,
    startIndex: number,
    endIndex: number
) => {
    const newTaskIds = Array.from(sourceCol.taskIds);
    const [removed] = newTaskIds.splice(startIndex, 1);
    newTaskIds.splice(endIndex, 0, removed);

    const newColumn = {
        ...sourceCol,
        taskIds: newTaskIds,
    };

    return newColumn;
};

const initialData = {
    tasks: {
        1: { id: 1, content: 'Configure Next.js application' },
        2: { id: 2, content: 'Configure Next.js and tailwind ' },
        3: { id: 3, content: 'Create sidebar navigation menu' },
        4: { id: 4, content: 'Create page footer' },
        5: { id: 5, content: 'Create page navigation menu' },
        6: { id: 6, content: 'Create page layout' },
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'TO-DO',
            taskIds: [1, 2, 3, 4, 5, 6],
        },
        'column-2': {
            id: 'column-2',
            title: 'IN-PROGRESS',
            taskIds: [],
        },
        'column-3': {
            id: 'column-3',
            title: 'COMPLETED',
            taskIds: [],
        },
    },
    // Facilitate reordering of the columns
    columnOrder: ['column-1', 'column-2', 'column-3'],
};

const Home: NextPage = () => {
    const [state, setState] = useState(initialData);

    const onDragEnd = (result: any) => {
        const { destination, source } = result;
        // If user tries to drop in an unknown destination
        if (!destination) return;
        // if the user drags and drops back in the same position
        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }
        // If the user drops within the same column but in a different position
        // @ts-ignore
        const sourceCol = state.columns[source.droppableId];
        // @ts-ignore
        const destinationCol = state.columns[destination.droppableId];

        if (sourceCol.id === destinationCol.id) {
            const newColumn = reorderColumnList(
                sourceCol,
                source.index,
                destination.index
            );

            const newState = {
                ...state,
                columns: {
                    ...state.columns,
                    [newColumn.id]: newColumn,
                },
            };
            setState(newState);
            return;
        }
        // If the user moves from one column to another
        const startTaskIds = Array.from(sourceCol.taskIds);
        const [removed] = startTaskIds.splice(source.index, 1);
        const newStartCol = {
            ...sourceCol,
            taskIds: startTaskIds,
        };

        const endTaskIds = Array.from(destinationCol.taskIds);
        endTaskIds.splice(destination.index, 0, removed);
        const newEndCol = {
            ...destinationCol,
            taskIds: endTaskIds,
        };

        const newState = {
            ...state,
            columns: {
                ...state.columns,
                [newStartCol.id]: newStartCol,
                [newEndCol.id]: newEndCol,
            },
        };

        setState(newState);
    };

    return (
        <>
            <BaseLayout>
                <main className="container mx-auto flex flex-col items-center justify-center h-screen p-10 dark:bg-main-dark-bg">
                    <div className="w-full h-auto mt-20 p-5 ">
                        {/* Kanban component */}
                        <DragDropContext onDragEnd={onDragEnd}>
                            <Kanban title="Title">
                                <>
                                    {state.columnOrder.map((columnId) => {
                                        const column = state.columns[columnId];
                                        const tasks = column.taskIds.map(
                                            (taskId: any) => state.tasks[taskId]
                                        );
                                        return (
                                            <Column
                                                key={column.id}
                                                column={column}
                                                tasks={tasks}
                                            />
                                        );
                                    })}
                                </>
                            </Kanban>
                        </DragDropContext>
                    </div>
                </main>
            </BaseLayout>
        </>
    );
};

export default Home;
