// import dynamic from 'next/dynamic';
import { useState } from 'react';

import { DropResult, Droppable } from 'react-beautiful-dnd';
import Column from './Column';

// const Column = dynamic(() => import('@/components/kanbanBoard/Column'), {
//     ssr: false,
// });

type KanbanProps = {
    title: string;
    boardState: any;
};

const Kanban = ({ boardState, ...props }: KanbanProps) => {
    return (
        <>
            <div className="flex flex-col bg-transparent h-screen w-full">
                <div className="flex flex-row p-2">
                    <p className="text-2xl text-left p-2 capitalize">title</p>
                </div>
                <Droppable
                    droppableId="columns"
                    direction="horizontal"
                    type="column"
                >
                    {(droppableProvided) => (
                        <div
                            className="flex flex-row px-4 max-w-1/3"
                            ref={droppableProvided.innerRef}
                            {...droppableProvided.droppableProps}
                        >
                            {boardState.columnOrder.map(
                                (columnId: any, index: number) => {
                                    const column = boardState.columns[columnId];
                                    const tasks = column?.taskIds.map(
                                        (taskId: number) =>
                                            boardState.tasks[taskId]
                                    );
                                    return (
                                        <Column
                                            key={column?.id}
                                            columnTitle={column?.title}
                                            column={column}
                                            tasks={tasks}
                                            index={index}
                                        />
                                    );
                                }
                            )}
                            {droppableProvided.placeholder}
                        </div>
                    )}
                </Droppable>
            </div>
        </>
    );
};

export default Kanban;
