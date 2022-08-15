import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BsListCheck } from 'react-icons/bs';
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
                    <div className="mt-10">
                        <div>
                            <p className="text-gray-400 m-3 mt-4 uppercase">
                                Most Recent
                            </p>
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
                                    <BsListCheck />
                                    <span className="capitalize">
                                        Check List 1
                                    </span>
                                </a>
                            </Link>
                        </div>
                        <div className="mt-10">
                            <p className="text-gray-400 m-3 mt-4 uppercase">
                                Folders
                            </p>
                        </div>
                        <div className="mt-10">
                            <p className="text-gray-400 m-3 mt-4 uppercase">
                                Theme Settings
                            </p>

                            <div>
                                <ThemeSettings />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Sidebar;
