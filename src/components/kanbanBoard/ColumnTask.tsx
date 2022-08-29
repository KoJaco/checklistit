import React, { useRef } from 'react';
import { AiOutlinePaperClip } from 'react-icons/ai';
import ArrowIcon from '@/components/elements/ArrowIcon';

type ColumnTaskProps = {
    children?: JSX.Element;
    id: number;
    text: string;
    editing: boolean;
};

const ColumnTask = ({ id, editing = false, ...props }: ColumnTaskProps) => {
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    const handleTextAreaInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (textAreaRef.current) {
            textAreaRef.current.style.height = 'auto';
            textAreaRef.current.style.height = `${e.target.scrollHeight}px`;
        }
    };

    return (
        <form action="#" className="">
            <div className="py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-slate-500 group h-full">
                <label htmlFor="description" className="sr-only">
                    Description
                </label>
                <div className="opacity-0 flex flex-row justify-between w-full group-hover:opacity-100 group-hover:py-2 group-hover:mb-2 transition-all duration-1000">
                    <div className="flex">
                        <div className="w-4 h-4 rounded-md bg-indigo-600 cursor-pointer"></div>
                    </div>
                    <div className="flex">
                        <ArrowIcon direction="left" disabled={false} />
                        <ArrowIcon direction="right" disabled={false} />
                    </div>
                    <div className="flex">
                        <ArrowIcon direction="up" disabled={true} />
                        <ArrowIcon direction="down" disabled={false} />
                    </div>
                    <div>{props.children}</div>
                </div>
                <textarea
                    ref={textAreaRef}
                    rows={1}
                    name="description"
                    id="description"
                    className="border-0 w-full mb-2 resize-none no-scrollbar bg-gray-50 text-gray-500 focus:ring-0 sm:text-md focus:outline-none placeholder:italic placeholder:text-gray-500/[0.5] focus:resize-y"
                    placeholder="Start writing..."
                    onInput={handleTextAreaInput}
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
