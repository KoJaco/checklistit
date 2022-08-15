import React from 'react';
import { useUIContext } from '@/contexts/UIContextProvider';
// import { themeColors } from '@/static/ts/theme';

const themeColors = [
    {
        name: 'primary-theme',
        color: '#BD1E51',
    },
    {
        name: 'secondary-theme',
        color: '#F1B814',
    },
    {
        name: 'offset-theme',
        color: '#490B3D',
    },
    // {
    //     name: 'info-theme',
    //     color: '#9CF6FB',
    // },
    // {
    //     name: 'success-theme',
    //     color: '#BCFD4C',
    // },
    // {
    //     name: 'light-alt-theme',
    //     color: '#FDF5DF',
    // },
    {
        name: 'dark-alt-theme',
        color: '#1A2238',
    },
];

const ThemeSettings = () => {
    // Hydration Mismatch occurring here
    const { setColor, setMode, currentMode } = useUIContext();

    return (
        <div className="bg-inherit w-full h-auto">
            <div className="flex-col">
                <div className="flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-slate-300/[0.5]  m-2">
                    <input
                        type="radio"
                        id="light"
                        name="theme"
                        value="light"
                        className="cursor-pointer"
                        onChange={setMode}
                        checked={currentMode === 'light'}
                    />
                    <label
                        htmlFor="light"
                        className="ml-2 text-md cursor-pointer"
                    >
                        Light
                    </label>
                </div>
                <div className="flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-slate-300/[0.5] m-2">
                    <input
                        type="radio"
                        id="dark"
                        name="theme"
                        value="dark"
                        className="cursor-pointer"
                        onChange={setMode}
                        checked={currentMode === 'dark'}
                    />
                    <label
                        htmlFor="dark"
                        className="ml-2 text-md cursor-pointer"
                    >
                        Dark
                    </label>
                </div>
            </div>
            <div className="flex-col border-t-1 border-color p-4">
                <div className="flex gap-2">
                    {themeColors.map((item) => (
                        <div
                            key={item.name}
                            className="relative mt-2 cursor-pointer flex gap-5 items-center"
                        >
                            <button
                                type="button"
                                className="h-5 w-5 rounded-full cursor-pointer"
                                style={{ backgroundColor: item.color }}
                                onClick={() => {
                                    setColor(item.color);
                                }}
                            ></button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ThemeSettings;
