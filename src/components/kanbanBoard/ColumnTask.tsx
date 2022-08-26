import React from 'react';
import { AiOutlinePaperClip } from 'react-icons/ai';
import { MdDragIndicator } from 'react-icons/md';
import { COLUMN_ITEM, COLUMN } from '@/core/constants/dragDropConsts';

const DROP_TARGETS = [COLUMN, COLUMN_ITEM];

type ColumnTaskProps = {
    children?: JSX.Element;
    id: string;
    text: string;
    editing: boolean;
};

interface Item {
    id: string;
    originalIndex: number;
}

const ColumnTask = ({ id, editing = false, ...props }: ColumnTaskProps) => {
    return (
        // <li
        //     // ref={preview}

        //     className="p-2"
        // >
        <form action="#" className="relative">
            <div className="p-2 border border-gray-300 rounded-lg shadow-sm bg-gray-50 overflow-hidden focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-slate-500">
                {/* <label htmlFor="title" className="sr-only">
                    Title
                </label>
                <div className="flex flex-row items-center">
                    <input
                        type="text"
                        name="title"
                        id="title"
                        className="block w-full border-0 pt-2.5 text-lg font-medium text-slate-800 bg-gray-50 placeholder-gray-500 focus:outline-none"
                        placeholder="Title"
                    />
                    <div
                        className="block p-2 text-gray-500 cursor-move focus:cursor-move"
                        // ref={(node) => drag(drop(node))}
                        // ref={drag}
                    >
                        <MdDragIndicator />
                    </div>
                </div> */}

                <div className="flex"></div>
                <label htmlFor="description" className="sr-only">
                    Description
                </label>
                <div className="py-0.5 flex flex-col items-end w-full">
                    <div
                        className="text-gray-500 cursor-move focus:cursor-move"
                        // ref={(node) => drag(drop(node))}
                        // ref={drag}
                    >
                        <MdDragIndicator />
                    </div>
                </div>
                <textarea
                    rows={2}
                    name="description"
                    id="description"
                    className="border-0 w-full resize-none bg-gray-50 text-gray-500 focus:ring-0 sm:text-md focus:outline-none placeholder:italic placeholder:text-gray-500/[0.5] focus:resize"
                    placeholder="Start writing..."
                    defaultValue={''}
                />
                {/* Spacer Element, show when editing or 'focused' */}

                {/* <div aria-hidden="true">
                    <div className="py-1">
                        <div className="h-3" />
                    </div>
                    <div className="h-px" />
                    <div className="py-1">
                        <div className="py-px">
                            <div className="h-3" />
                        </div>
                    </div>
                </div> */}

                <div className="border-t border-gray-200 px-2 py-2 flex justify-between items-center space-x-3 sm:px-3">
                    <div className="flex">
                        <button
                            type="button"
                            className="-ml-2 -my-2 rounded-full px-3 py-2 inline-flex items-center text-left text-gray-400 group"
                        >
                            <AiOutlinePaperClip
                                className="-ml-1 h-5 w-5 mr-2 group-hover:text-gray-500"
                                aria-hidden="true"
                            />
                            <span className="text-sm text-gray-500 group-hover:text-gray-600 italic">
                                Attach a file
                            </span>
                        </button>
                    </div>
                    <div className="flex-shrink-0">
                        <button
                            type="submit"
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-bg/[0.8] hover:bg-primary-bg hover:drop-shadow focus:outline-none focus:drop-shadow-lg transition-colors duration-300"
                        >
                            Create
                        </button>
                    </div>
                </div>

                {/* <div
                    ref={(node) => drag(drop(node))}
                    className="w-10 h-10 rounded-lg bg-gray-500 cursor-move focus:cursor-move"
                ></div> */}
                {props.children}
            </div>
        </form>
        // </li>
    );
};

export default ColumnTask;
