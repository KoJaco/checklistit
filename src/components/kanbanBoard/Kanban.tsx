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
    // change styling and focus based on selected column, default to 0
    const [selectedColumn, setSelectedColumn] = useState(0);

    function getSelectedColumnId(index: number) {
        return `column-${selectedColumn}`;
    }

    return (
        <>
            <div className="flex flex-col bg-transparent h-screen w-full">
                <div className="flex flex-row p-4 ml-2 mb-10">
                    <p className="text-3xl text-left capitalize text-gray-500 bg-transparent focus:border-none">
                        {props.title}
                    </p>
                    <div className=""></div>
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
                                        /* <div className="flex my-5 w-full justify-center">
                                                <button
                                                    className="rounded-lg p-3 bg-transparent hover:scale-110 hover:drop-shadow-lg text-gray-500 transition-transform duration-300"
                                                    onClick={() =>
                                                        handleAddTask(column.id)
                                                    }
                                                >
                                                    <MdAdd />
                                                </button>
                                            </div> */
                                        // </Column>
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
