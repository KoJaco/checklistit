import React, { useState, useRef, useEffect } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Droppable } from 'react-beautiful-dnd';

import { MdDragIndicator, MdAdd, MdBrush } from 'react-icons/md';
import { RgbaColorPicker } from 'react-colorful';

import ColumnTask from './ColumnTask';
import type { TColumn, TTask } from '@/core/types/kanbanBoard';
import { useOnClickOutside } from '@/core/hooks';
import { useKanbanBoardStore } from '@/contexts/KanbanBoardStore';

import clsx from 'clsx';

type ColumnProps = {
    column: TColumn | undefined;
    index: number;
    columnTitle: string;
    tasks: Array<TTask> | undefined;
    children?: JSX.Element;
};

const Column = ({ children, column, tasks, ...props }: ColumnProps) => {
    const [color, setColor] = useState<{
        r: number;
        g: number;
        b: number;
        a: number;
    }>({ r: 250, g: 250, b: 250, a: 0 });

    const {
        showColorPicker,
        setShowColorPicker,
        toggleShowColorPicker,
        columnCount,
    } = useKanbanBoardStore();

    const colorPickerRef = useRef(null);
    useOnClickOutside(colorPickerRef, () => handleShowColorPicker(false));

    function parsedColor(color: {
        r: number;
        g: number;
        b: number;
        a: number;
    }) {
        return `rgba(${color.r},${color.g},${color.b},${color.a})`;
    }

    function handleShowColorPicker(value: boolean) {
        // this should async saved the bg color to DB
        setShowColorPicker(value);
    }

    return (
        <Draggable draggableId={column!.id} index={props.index}>
            {(draggableProvided) => (
                <div
                    className="flex flex-col w-full h-auto"
                    {...draggableProvided.draggableProps}
                    ref={draggableProvided.innerRef}
                >
                    {/* colour picker component, fixed to bottom of screen */}
                    {showColorPicker && (
                        <div
                            ref={colorPickerRef}
                            className="fixed bottom-12 right-12 drop-shadow-lg hover:scale-110 transition-all duration-500"
                        >
                            <RgbaColorPicker
                                className="w-28 h-28"
                                color={color}
                                onChange={setColor}
                            ></RgbaColorPicker>
                        </div>
                    )}
                    <div
                        className="flex justify-between items-center w-full bg-transparent p-2 ml-2"
                        {...draggableProvided.dragHandleProps}
                    >
                        <h1 className="text-xl text-gray-500 font-medium italic">
                            {props.columnTitle}
                        </h1>
                        <div className="flex justify-right mr-4">
                            <button
                                className={clsx(
                                    'rounded-md border-1 border-gray-300 p-1 drop-shadow-md',
                                    showColorPicker &&
                                        'scale-110 transition-transform duration-300 drop-shadow-lg '
                                )}
                                style={{
                                    backgroundColor: parsedColor(color),
                                }}
                                onClick={toggleShowColorPicker}
                                // disable when selecting color, let useOnClickOutside handle close
                                disabled={showColorPicker ? true : false}
                            >
                                <MdBrush className="w-5 h-5 text-gray-50 hover:text-gray-500 transition-colors duration-500" />
                            </button>
                        </div>
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
                                            : parsedColor(color),
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
                                                    taskCount={6}
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
                                <div className="flex my-2 w-full h-auto justify-end">
                                    <button
                                        className="bg-transparent hover:scale-110 text-gray-500 transition-transform duration-300"
                                        // onClick={() => handleAddTask(column.id)}
                                    >
                                        <MdAdd className="w-5 h-5 text-gray-500 dark:text-gray-50" />
                                    </button>
                                </div>
                            </div>
                        )}
                    </Droppable>
                </div>
            )}
        </Draggable>
    );
};

export default Column;
