import { Fragment, useState } from 'react';
import { Transition } from '@headlessui/react';
import {
    AiOutlineCheckCircle,
    AiOutlineClose,
    AiOutlineExclamation,
} from 'react-icons/ai';

type NotificationProps = {
    variant: 'success' | 'error';
    headerMessage: string;
    contentMessage?: string;
    customCallback?: () => void;
    show: boolean;
};

const Notification = (props: NotificationProps) => {
    const [show, setShow] = useState(props.show);

    return (
        <>
            {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
            <Transition
                show={show}
                as={Fragment}
                enter="transform ease-out duration-300 transition"
                enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
                enterTo="translate-y-0 opacity-100 sm:translate-x-0"
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="p-4">
                        <div className="flex items-start">
                            <div className="flex-shrink-0">
                                {/* can add more variant icons here */}
                                {props.variant === 'success' && (
                                    <AiOutlineCheckCircle
                                        className="h-6 w-6 text-green-400"
                                        aria-hidden="true"
                                    />
                                )}
                                {props.variant === 'error' && (
                                    <AiOutlineExclamation
                                        className="h-6 w-6 text-green-400"
                                        aria-hidden="true"
                                    />
                                )}
                            </div>
                            <div className="ml-3 w-0 flex-1 pt-0.5">
                                <p className="text-sm font-medium text-gray-900">
                                    {props.headerMessage}
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                    {props.contentMessage}
                                </p>
                            </div>
                            <div className="ml-4 flex-shrink-0 flex">
                                <button
                                    type="button"
                                    className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    onClick={() => {
                                        setShow(false);
                                    }}
                                >
                                    <span className="sr-only">Close</span>
                                    <AiOutlineClose
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Transition>
        </>
    );
};

export default Notification;
