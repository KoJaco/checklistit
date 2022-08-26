import React from 'react';
import { AiOutlinePaperClip } from 'react-icons/ai';

import { COLUMN_ITEM, COLUMN } from '@/core/constants/dragDropConsts';
import ArrowIcon from '@/components/elements/ArrowIcon';

const DROP_TARGETS = [COLUMN, COLUMN_ITEM];

type ColumnTaskProps = {
    children?: JSX.Element;
    id: number;
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
            <div className="py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-gray-50 overflow-hidden focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-slate-500 group">
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
                <div className="opacity-0 flex flex-row justify-between w-full group-hover:opacity-100 group-hover:py-2 group-hover:mb-2 transition-all duration-1000">
                    <div className="flex">
                        <div className="w-4 h-4 rounded-md bg-indigo-600 cursor-pointer"></div>
                    </div>
                    <div className="flex">
                        <ArrowIcon direction="left" disabled={true} />
                        <ArrowIcon direction="right" disabled={false} />
                    </div>
                    <div>{props.children}</div>
                </div>
                <textarea
                    rows={2}
                    name="description"
                    id="description"
                    className="border-0 w-full my-2 resize-none bg-gray-50 text-gray-500 focus:ring-0 sm:text-md focus:outline-none placeholder:italic placeholder:text-gray-500/[0.5] focus:resize-y"
                    placeholder="Start writing..."
                    defaultValue={props.text}
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

                <div className="opacity-0 max-h-0 border-t border-gray-200 flex justify-between items-center group-hover:opacity-100 group-hover:py-5 px-2 transition-all duration-1000 ease-in-out">
                    <div className="flex">
                        <button
                            type="button"
                            className="-ml-2 -my-2 rounded-full py-2 inline-flex items-center text-left text-gray-400 group"
                        >
                            <AiOutlinePaperClip
                                className="h-5 w-5 mr-2 hover:text-gray-500"
                                aria-hidden="true"
                            />
                        </button>
                    </div>
                    <div className="flex-shrink-0">
                        <button
                            type="submit"
                            className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-bg/[0.8] hover:bg-primary-bg hover:drop-shadow focus:outline-none focus:drop-shadow-lg transition-colors duration-1000"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </form>
        // </li>
    );
};

export default ColumnTask;
