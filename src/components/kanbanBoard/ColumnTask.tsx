import React, { useRef, useState, useEffect } from 'react';
import { AiOutlinePaperClip, AiOutlineDelete } from 'react-icons/ai';
import ArrowIcon from '@/components/elements/ArrowIcon';
import { useKanbanBoardStore } from '@/contexts/KanbanBoardStore';

type ColumnTaskProps = {
    children?: JSX.Element;
    id: number;
    taskCount: number;
    text: string;
    editing: boolean;
};

const ColumnTask = ({ id, editing = false, ...props }: ColumnTaskProps) => {
    // Controlled text area input, save button submits the form and affects DB + boardState
    const [taskContent, setTaskContent] = useState<string>('');
    const [isEditing, setIsEditing] = useState<boolean>(false);

    const taskCount = useKanbanBoardStore((state) => state.taskCount);

    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (document.activeElement === textAreaRef.current) {
            setIsEditing(true);
            // console.log(
            //     'element with content: ' + taskContent + ' | has focus'
            // );
        }

        if (document.activeElement !== textAreaRef.current) {
            setIsEditing(false);
            // console.log('element does NOT have focus');
        }
    }, [taskContent]);

    function getStringTaskId(id: number) {
        return `task-${id}`;
    }

    function handleTextAreaInput(e: React.ChangeEvent<HTMLTextAreaElement>) {
        if (textAreaRef.current) {
            textAreaRef.current.style.height = 'auto';
            textAreaRef.current.style.height = `${e.target.scrollHeight}px`;
        }
    }

    function handleTaskContentChange(
        event: React.ChangeEvent<HTMLTextAreaElement>
    ) {
        setTaskContent(event.currentTarget.value);
    }

    // dispatch task save and content back to reducer
    // async:: generate new task object, save to BoardState, write to DB.
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsEditing(false);
    }

    return (
        <form action="/" onSubmit={handleSubmit}>
            <div className="py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-gray-50 dark:bg-secondary-dark-bg focus-within:border-red-800 focus-within:ring-1 focus-within:ring-slate-500 group h-full">
                <label htmlFor="description" className="sr-only">
                    Description
                </label>
                <div className="opacity-0 flex flex-row justify-between w-full items-center group-hover:opacity-100 group-hover:py-2 group-hover:mb-6 transition-all duration-1000">
                    <div className="flex">
                        <button
                            className="w-5 h-5 rounded-md hover:bg-red-600 cursor-pointer text-gray-500 hover:text-gray-50 flex items-center justify-center transition-color duration-300 disabled:text-gray-500/[0.5] disabled:cursor-not-allowed disabled:hover:bg-transparent"
                            disabled={taskCount === 1 ? true : false}
                        >
                            <AiOutlineDelete className="w-4 h-4" />
                        </button>
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
                    name="task"
                    id="task"
                    className="border-0 w-full mb-2 resize-none no-scrollbar bg-gray-50 text-gray-500 dark:text-gray-50 focus:ring-0 sm:text-md focus:outline-none placeholder:italic placeholder:text-gray-500/[0.5] dark:placeholder:text-gray-50/[0.5] focus:resize-y bg-inherit group"
                    placeholder="Start writing..."
                    value={taskContent}
                    onChange={handleTaskContentChange}
                    onInput={handleTextAreaInput}
                    // defaultValue={taskContent}
                />

                {isEditing && (
                    <div className="opacity-0 max-h-0 border-t border-gray-200 flex justify-between items-center group-hover:opacity-100 group-hover:py-5 px-2 transition-all duration-1000 ease-in-out">
                        <div className="flex">
                            <button className="-ml-2 -my-2 rounded-full py-2 inline-flex items-center text-left text-gray-400 group">
                                <AiOutlinePaperClip
                                    className="h-5 w-5 mr-2 hover:text-gray-500"
                                    aria-hidden="true"
                                />
                            </button>
                        </div>
                        <div className="flex-shrink-0">
                            <input
                                type="submit"
                                value="Save"
                                className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600/[0.8] hover:bg-green hover:drop-shadow focus:outline-none focus:drop-shadow-lg transition-colors duration-1000 cursor-pointer"
                            />
                        </div>
                    </div>
                )}
            </div>
        </form>
        // </li>
    );
};

export default ColumnTask;
