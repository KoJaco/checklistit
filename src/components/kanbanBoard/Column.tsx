import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Droppable } from 'react-beautiful-dnd';
import ColumnTask from './ColumnTask';

import type { TColumnItem, TColumn, TTask } from './types';

type ColumnProps = {
    column: TColumn;
    task: TTask;
};

const Column = ({ column, tasks }: any) => {
    return (
        <div className="flex flex-col">
            <div className="flex mb-1">
                <p className="text-lg font-semibold">{column.title}</p>
            </div>
            <Droppable droppableId={column.id}>
                {(droppableProvided, droppableSnapshot) => (
                    <div
                        className="flex flex-col p-1"
                        ref={droppableProvided.innerRef}
                        {...droppableProvided.droppableProps}
                    >
                        {tasks.map((task: any, index: any) => (
                            <Draggable
                                key={task.id}
                                draggableId={`${task.id}`}
                                index={index}
                            >
                                {(draggableProvided, draggableSnapshot) => (
                                    <div
                                        style={{
                                            borderColor:
                                                draggableSnapshot.isDragging
                                                    ? '#fff'
                                                    : 'transparent',
                                        }}
                                        ref={draggableProvided.innerRef}
                                        {...draggableProvided.draggableProps}
                                        {...draggableProvided.dragHandleProps}
                                    >
                                        <ColumnTask
                                            id={index}
                                            text={task.content}
                                            editing={false}
                                        />
                                    </div>
                                )}

                                {/* // {(draggableProvided, draggableSnapshot) => ( */}
                                {/* //     <div */}
                                {/* //         className="flex mb-1 h-72 rounded-lg p-2 border-1 drop-shadow-md"
                                //         style={{
                                //             borderColor:
                                //                 draggableSnapshot.isDragging
                                //                     ? '#fff'
                                //                     : 'transparent',
                                //         }}
                                //         ref={draggableProvided.innerRef}
                                //         {...draggableProvided.draggableProps}
                                //         {...draggableProvided.dragHandleProps}
                                //     >
                                //         <p>{task.content}</p>
                                //     </div>
                                // )} */}
                            </Draggable>
                        ))}
                    </div>
                )}
            </Droppable>
        </div>
    );
};

export default Column;
