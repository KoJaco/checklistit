import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BsKanban } from 'react-icons/bs';
import { IoColorPaletteOutline } from 'react-icons/io5';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';

import ThemeSettings from '@/components/themeSettings/ThemeSettings';
import { useUIContext } from '@/contexts/UIContextProvider';

type SidebarProps = {};

const Sidebar = (props: SidebarProps) => {
    const { activeMenu, setActiveMenu, screenSize, currentColor } =
        useUIContext();

    const router = useRouter();
    const currentRoute = router.pathname;

    const handleCloseSidebar = () => {
        if (activeMenu && screenSize != undefined && screenSize <= 900) {
            setActiveMenu(false);
        }
    };

    const activeLinkStyling =
        "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2'";

    const inactiveLinkStyling =
        'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

    function parseBgColor() {
        console.log(`bg-[${currentColor.toLowerCase()}]`);
        return `bg-[${currentColor.toLowerCase()}]`;
    }

    return (
        <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
            {activeMenu && (
                <>
                    <div className="flex justify-between items-center">
                        <Link href="/">
                            <div
                                className="cursor-pointer items-center gap-3 ml-3 mt-4 flex text-xl font-medium tracking-tight dark:text-white text-slate-600"
                                onClick={() => handleCloseSidebar}
                            >
                                <SiShopware />
                                <span>CheckList-It</span>
                            </div>
                        </Link>

                        <button
                            type="button"
                            onClick={() => setActiveMenu(!activeMenu)}
                            className="text-xl rounded-lg p-3 hover:bg-light-gray mt-4 block md:hidden"
                        >
                            <MdOutlineCancel />
                        </button>
                    </div>
                    <div className="mt-14">
                        <div>
                            <div className="flex items-center justify-start m-3 mt-4 py-2">
                                <span className="h-full text-gray-400 mr-4">
                                    <BsKanban className="w-5 h-5" />
                                </span>
                                <p className="text-gray-400 mr-4 font-regular uppercase">
                                    Boards
                                </p>
                            </div>

                            <Link href="/" passHref={true}>
                                <a
                                    style={{
                                        backgroundColor:
                                            currentRoute === '/'
                                                ? currentColor
                                                : '',
                                    }}
                                    className={
                                        currentRoute === '/'
                                            ? 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md m-2 text-gray-50 drop-shadow-md'
                                            : 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2'
                                    }
                                    onClick={handleCloseSidebar}
                                >
                                    <span className="capitalize">
                                        Board Title
                                    </span>
                                </a>
                            </Link>
                            <Link href="/board-1" passHref={true}>
                                <a
                                    style={{
                                        backgroundColor:
                                            currentRoute === '/board-1'
                                                ? currentColor
                                                : 'transparent',
                                    }}
                                    className={
                                        currentRoute === '/board-1'
                                            ? 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md m-2 text-gray-50 drop-shadow-md'
                                            : 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2'
                                    }
                                    onClick={handleCloseSidebar}
                                >
                                    <span className="capitalize">
                                        Board Title
                                    </span>
                                </a>
                            </Link>
                        </div>
                        <div className="mt-14 flex items-center justify-start m-3 py-2">
                            <span className="h-full text-gray-400 mr-4">
                                <IoColorPaletteOutline className="w-5 h-5" />
                            </span>
                            <p className="text-gray-400 mr-4 font-regular uppercase">
                                Theme and Colours
                            </p>
                        </div>
                        <div>
                            <ThemeSettings />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Sidebar;
