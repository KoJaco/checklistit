import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Droppable } from 'react-beautiful-dnd';
import ColumnTask from './ColumnTask';
import { MdDragIndicator, MdAdd } from 'react-icons/md';
import type { TColumnItem, TColumn, TTask } from './types';
import { HexColorPicker } from 'react-colorful';

type ColumnProps = {
    column: TColumn | undefined;
    index: number;
    columnTitle: string;
    tasks: Array<TTask> | undefined;
    children?: JSX.Element;
};

const Column = ({ children, ...props }: ColumnProps) => {
    const [color, setColor] = useState('#000');
    const [showColorPicker, setShowColorPicker] = useState(false);

    const { column, tasks } = props;

    function handleShowColorPicker() {
        setShowColorPicker(!showColorPicker);
    }

    return (
        <Draggable draggableId={column!.id} index={props.index}>
            {(draggableProvided) => (
                <div
                    className="flex flex-col w-full h-auto"
                    {...draggableProvided.draggableProps}
                    ref={draggableProvided.innerRef}
                >
                    <div
                        className="flex justify-between items-center w-full bg-transparent p-2 ml-2"
                        {...draggableProvided.dragHandleProps}
                    >
                        <h1 className="text-xl text-gray-500 font-medium italic">
                            {props.columnTitle}
                        </h1>
                        <div className="flex justify-right mr-4">
                            <button
                                className="rounded-md border w-5 h-5"
                                style={{ backgroundColor: color }}
                                onClick={handleShowColorPicker}
                            ></button>
                        </div>

                        {showColorPicker && (
                            <div className="">
                                <HexColorPicker
                                    color={color}
                                    onChange={setColor}
                                ></HexColorPicker>
                            </div>
                        )}
                    </div>
                    {/* Indicated that column will NEVER be undefined */}
                    <Droppable droppableId={column!.id} type="task">
                        {(droppableProvided, droppableSnapshot) => (
                            <div
                                className="px-3 mx-1 rounded-lg transition-color duration-300 h-full"
                                style={{
                                    backgroundColor:
                                        droppableSnapshot.isDraggingOver
                                            ? '#F0F0F0'
                                            : 'transparent',
                                }}
                                ref={droppableProvided.innerRef}
                                {...droppableProvided.droppableProps}
                            >
                                {tasks?.map((task: TTask, index: number) => (
                                    <Draggable
                                        key={task.id}
                                        draggableId={`task-${task.id}`}
                                        index={index}
                                    >
                                        {(provided, snapshot) => (
                                            <div
                                                className="py-2"
                                                {...provided.draggableProps}
                                                ref={provided.innerRef}
                                            >
                                                <ColumnTask
                                                    id={index}
                                                    text={task.content}
                                                    editing={false}
                                                >
                                                    <div
                                                        {...provided.dragHandleProps}
                                                    >
                                                        <MdDragIndicator className="flex text-gray-500 cursor-drag focus:cursor-drag" />
                                                    </div>
                                                </ColumnTask>
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {droppableProvided.placeholder}
                                {/* {children} */}
                            </div>
                        )}
                    </Droppable>
                </div>
            )}
        </Draggable>
    );
};

export default Column;

// <div className="flex flex-col w-full h-auto">
//     <div className="flex w-full bg-transparent p-2 ml-2">
//         <h1 className="text-xl text-gray-500 font-medium italic">
//             {props.columnTitle}
//         </h1>
//     </div>
//     {/* Indicated that column will NEVER be undefined */}
//     <Droppable droppableId={column!.id}>
//         {(droppableProvided, droppableSnapshot) => (
//             <div
//                 className="px-3 rounded-lg"
//                 style={{
//                     backgroundColor: droppableSnapshot.isDraggingOver
//                         ? '#F0F0F0'
//                         : 'transparent',
//                 }}
//                 ref={droppableProvided.innerRef}
//                 {...droppableProvided.droppableProps}
//             >
//                 {droppableProvided.placeholder}
//                 {tasks?.map((task: TTask, index: number) => (
//                     <Draggable
//                         key={task.id}
//                         draggableId={`task-${task.id}`}
//                         index={index}
//                     >
//                         {(draggableProvided, draggableSnapshot) => (
//                             <div
//                                 style={{
//                                     borderColor:
//                                         draggableSnapshot.isDragging
//                                             ? '#fff'
//                                             : 'transparent',
//                                 }}
//                                 ref={draggableProvided.innerRef}
//                                 {...draggableProvided.draggableProps}
//                                 {...draggableProvided.dragHandleProps}
//                                 className="py-2"
//                             >
//                                 <ColumnTask
//                                     id={index}
//                                     text={task.content}
//                                     editing={false}
//                                 />
//                             </div>
//                         )}
//                     </Draggable>
//                 ))}
//             </div>
//         )}
//     </Droppable>
// </div>
