import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import BaseLayout from '@/layouts/BaseLayout';

import { kanbanBoardMockData } from '@/static/ts/initialData';
import type { TTask, TColumn, Board } from '@/core/types/kanbanBoard';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

import { initializeBoard } from '@/core/utils/kanbanBoard';

const Kanban = dynamic(() => import('@/components/kanbanBoard/Kanban'), {
    ssr: false,
});

const Home: NextPage = () => {
    // const [boardState, setBoardState] = useState(kanbanBoardMockData);
    const [boardState, setBoardState] = useState<Board>(() => {
        return initializeBoard(new Date(Date.now()).toLocaleDateString());
    });

    // console.log(boardState);

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

        if (startColumn === finishColumn && startColumn !== undefined) {
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

        if (startColumn !== undefined && finishColumn !== undefined) {
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
        }
    };

    function handleAddTask(task: TTask, columnId: string) {}

    function handleRemoveTask(task: TTask, columnId: string) {}

    function handleAddColumn(column: TColumn) {}

    // function removeColumn(columnId: string) {
    //     console.log('function hit');
    //     // select column to be deleted
    //     const column = boardState.columns[columnId];
    //     let newColumnOrder = Array.from(boardState.columnOrder);
    //     // find all tasks belonging to that column
    //     const taskIds = Array.from(column.taskIds);
    //     if (taskIds.length === 0) {
    //         let columnKeys = Object.keys(boardState.columns);
    //         let newColumns: Columns = {};
    //         console.log(newColumns);
    //         columnKeys.forEach((key) => {
    //             if (key !== columnId) {
    //                 newColumns[key] = boardState.columns[key];
    //             }
    //         });
    //         const newState = {
    //             ...boardState,
    //             columns: newColumns,
    //         };
    //         newColumnOrder.filter((id) => id === columnId);

    //         setBoardState(newState);
    //     }
    // }

    return (
        <BaseLayout>
            <>
                <main className="container mx-auto flex flex-col items-center justify-center h-screen p-10 dark:bg-main-dark-bg">
                    <div className="w-full h-auto mt-20 p-2">
                        {/* Kanban component */}
                        <DragDropContext onDragEnd={onDragEnd}>
                            <Kanban
                                title={boardState.title}
                                createdAt={boardState.createdAt}
                                updatedAt={boardState.updatedAt}
                                boardState={boardState}
                                setBoardState={setBoardState}
                            />
                        </DragDropContext>
                    </div>
                </main>
            </>
        </BaseLayout>
    );
};

export default Home;
