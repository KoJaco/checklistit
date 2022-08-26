// import dynamic from 'next/dynamic';
import { useState } from 'react';

import { DropResult, Droppable } from 'react-beautiful-dnd';
import { MdAdd } from 'react-icons/md';
import Column from './Column';

// const Column = dynamic(() => import('@/components/kanbanBoard/Column'), {
//     ssr: false,
// });

type KanbanProps = {
    title: string;
    setBoardState: (state: any) => void;
    boardState: any;
};

const Kanban = ({ boardState, ...props }: KanbanProps) => {
    // change styling and focus based on selected column, default to 0
    const [selectedColumn, setSelectedColumn] = useState(0);

    function getSelectedColumnId(index: number) {
        return `column-${selectedColumn}`;
    }

    function handleAddTask(columnId: string) {
        const columnTaskCount: number =
            boardState.columns[columnId].taskIds.length;
        console.log(columnTaskCount);
    }

    return (
        <>
            <div className="flex flex-col bg-transparent h-screen w-full">
                <div className="flex flex-row p-4 ml-2 mb-10">
                    <p className="text-3xl text-left capitalize">
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
