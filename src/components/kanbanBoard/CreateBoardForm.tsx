import React, { useState } from 'react';

const CreateBoardForm = () => {
    // keep track of local state, upon save add the board to db.
    const [state, setState] = useState<{
        boardTitle: string;
        boardTag: string;
        columnTitles: string[];
    }>({ boardTitle: '', boardTag: '', columnTitles: [''] });

    function handleUserInput(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.currentTarget.value;
        setState({
            ...state,
            [event.currentTarget.name]: value,
        });
    }

    return (
        <form className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
            <div className="flex items-center p-10 bg-gray-50 rounded-lg drop-shadow-lg w-1/2">
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
                    <div className="mt-10"></div>
                </div>
            </div>
        </form>
    );
};

export default CreateBoardForm;
