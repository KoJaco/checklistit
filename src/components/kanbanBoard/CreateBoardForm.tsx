import React, { useState, useRef } from 'react';
import { useOnClickOutside } from '@/core/hooks/index';
import { Board } from '@/core/types/kanbanBoard';
import { useKanbanBoardStore } from '@/contexts/KanbanBoardStore';
import { db } from '@/server/db';

type CreateBoardFormProps = {
    setOpen: (value: boolean) => void;
};

const CreateBoardForm = ({ setOpen }: CreateBoardFormProps) => {
    // keep track of local state, upon save add the board to db.
    const [state, setState] = useState<{
        boardTitle: string;
        boardTag: string;
        columnTitles: string[];
    }>({ boardTitle: '', boardTag: '', columnTitles: [''] });

    const { boardCount, increaseBoardCount } = useKanbanBoardStore();

    const createBoardFormRef = useRef(null);
    useOnClickOutside(createBoardFormRef, () => setOpen(false));

    function handleUserInput(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.currentTarget.value;
        setState({
            ...state,
            [event.currentTarget.name]: value,
        });
    }

    function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
        event.preventDefault();
        createBoard(state.boardTitle, state.boardTag);
        increaseBoardCount();
        setOpen(false);
    }

    const createBoard = async (title: string, tag: string) => {
        try {
            db.addBoard(title, tag);
            console.info(
                `A new board was created with title: ${title} and tag: ${tag}`
            );
        } catch (error) {
            console.error(`Failed to add board`);
        }
    };

    return (
        <form
            className="flex min-h-full items-center justify-center p-4 text-center"
            onSubmit={handleSubmit}
        >
            <div
                ref={createBoardFormRef}
                className="flex items-center p-10 bg-gray-50 rounded-lg drop-shadow-lg w-1/2"
            >
                <div className="mt-1 flex flex-col w-full">
                    <div className="flex mb-10">
                        <h1 className="text-2xl text-gray-700">
                            Create a New Board
                        </h1>
                    </div>
                    <div className="grid grid-cols-5">
                        <div className="col-span-3">
                            <label
                                htmlFor="boardTitle"
                                className="block text-xl text-left font-medium text-gray-500 mb-2"
                            >
                                Title *
                            </label>
                            <input
                                type="text"
                                name="boardTitle"
                                id="boardTitle"
                                autoComplete="boardTitle"
                                className="block w-full rounded-md border-gray-300 shadow-sm outline-none focus:drop-shadow-lg transition-all duration-500 sm:text-xl p-4"
                                value={state.boardTitle}
                                onChange={handleUserInput}
                            />
                        </div>
                        <div className="col-span-2 ml-4">
                            <label
                                htmlFor="boardTag"
                                className="block text-xl text-left font-medium text-gray-500 mb-2"
                            >
                                Tag
                            </label>
                            <input
                                type="text"
                                name="boardTag"
                                id="boardTag"
                                autoComplete="boardTag"
                                className="block w-full rounded-md outline-none border-gray-300 shadow-sm focus:drop-shadow-lg transition-all duration-500 sm:text-xl p-4"
                                value={state.boardTag}
                                onChange={handleUserInput}
                            />
                        </div>
                    </div>
                    <div className="flex flex-row justify-end mt-10">
                        {/* <button
                            className="px-4 py-2 bg-gradient-to-r from-slate-300 to-slate-400 rounded-lg text-gray-50 drop-shadow-md transition-transform hover:scale-105 duration-500"
                            onClick={() => {}}
                        >
                            Cancel
                        </button> */}

                        <button
                            className="px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 rounded-lg text-gray-50 drop-shadow-md transition-transform hover:scale-105 duration-500"
                            type="submit"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default CreateBoardForm;
