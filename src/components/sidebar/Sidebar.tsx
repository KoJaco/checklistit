import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BsListCheck } from 'react-icons/bs';

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

    return <></>;
};

export default Sidebar;
