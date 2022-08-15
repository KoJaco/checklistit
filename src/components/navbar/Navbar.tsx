import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { useUIContext } from '@/contexts/UIContextProvider';

type NavButtonProps = {
    title: string;
    customCallback: () => void;
    icon: React.ReactNode;
    color: string;
    dotColor?: string;
};

const NavButton = (props: NavButtonProps) => (
    <button
        type="button"
        onClick={props.customCallback}
        style={{ color: props.color }}
        className="relative text-xl rounded-lg p-3 hover:bg-gray-50"
    >
        <span
            style={{ background: props.dotColor }}
            className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
        />
        {props.icon}
    </button>
);

const Navbar = () => {
    const {
        currentMode,
        currentColor,
        activeMenu,
        setActiveMenu,
        screenSize,
        setScreenSize,
    } = useUIContext();

    useEffect(() => {
        // setting our screen size
        const handleResize = () => setScreenSize(window.innerWidth);

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        // check screen size for active menu set
        if (screenSize != undefined && screenSize <= 900) {
            setActiveMenu(false);
        } else {
            setActiveMenu(true);
        }
    }, [screenSize]);

    return (
        <div className="flex justify-between md:mx-6 p-2 relative">
            <NavButton
                title="menu"
                customCallback={() => setActiveMenu(!activeMenu)}
                color={currentMode === 'dark' ? '#fff' : currentColor}
                icon={<AiOutlineMenu />}
            />

            <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg">
                <div className="rounded-full"></div>

                <p>
                    <span className="text-gray-400 text-14">Hi, </span>{' '}
                    <span className="text-gray-400 font-bold ml-1 text-14">
                        Fucker
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Navbar;
