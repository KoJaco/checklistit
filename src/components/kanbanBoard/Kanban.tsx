import { useState } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Column from './Column';

import type { Board, TaskId, ColumnId } from '@/core/types/kanbanBoard';

type KanbanProps = {
    title: string;
    createdAt: string;
    updatedAt: string;
    setBoardState: (state: any) => void;
    boardState: Board;
};

const Kanban = ({ boardState, ...props }: KanbanProps) => {
    // change styling based on currentColumn, allow selecting color by keeping track of this state.
    const [currentColumnId, setCurrentColumnId] = useState(1);
    // need columnCount to change column styling based on count, need arrow or horizontal scroll to get to next column on mobile.
    const [columnCount, setColumnCount] = useState(1);

    function parseCurrentColumnId(index: number) {
        return `column-${currentColumnId}`;
    }

    // const inputAction = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     dispatch({
    //         type: 'SET_TITLE',
    //     });
    // };

    return (
        <>
            <div className="flex flex-col bg-transparent h-screen w-full">
                <div className="flex flex-row p-4 ml-2 mb-10 items-center">
                    <p className="text-3xl capitalize text-gray-500 bg-transparent focus:border-none mr-auto">
                        {props.title}
                    </p>

                    <button className="bg-green-500 p-1 w-12 text-gray-50 rounded-lg">
                        save
                    </button>
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
                                (columnId: ColumnId, index: number) => {
                                    const column = boardState.columns[columnId];
                                    const tasks = column?.taskIds.map(
                                        (taskId: TaskId) =>
                                            boardState.tasks[taskId]
                                    );
                                    return (
                                        <Column
                                            key={column?.id}
                                            columnTitle={column!.title}
                                            column={column}
                                            // @ts-ignore
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
