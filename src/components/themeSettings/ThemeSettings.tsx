import React from 'react';
import { useUIContext } from '@/contexts/UIContextProvider';
// import { themeColors } from '@/static/ts/theme';
import Toggle from '@/components/elements/Toggle';

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
    {
        name: 'dark-alt-theme',
        color: '#1A2238',
    },
];

const ThemeSettings = () => {
    const { setColor, setMode, currentMode } = useUIContext();

    return (
        <div className="bg-inherit w-full h-auto">
            <div className="flex-col p-4">
                <div className="form-check form-switch">
                    <label className="relative flex justify-between items-center group p-2 text-md">
                        <span className="text-gray-700 dark:text-gray-200">
                            Light/Dark
                        </span>
                        <input
                            id={currentMode}
                            type="checkbox"
                            className="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md"
                            checked={currentMode === 'light' ? false : true}
                            onChange={setMode}
                            value={currentMode === 'light' ? 'dark' : 'light'}
                        />
                        <span className="cursor-pointer w-14 h-8 flex items-center flex-shrink-0 p-0.5 bg-slate-300 rounded-full duration-300 ease-in-out peer-checked:bg-primary-bg after:w-7 after:h-7 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-6 group-hover:scale-105 group-hover:drop-shadow-md"></span>
                    </label>
                </div>

                <div className="flex gap-2">
                    {themeColors.map((item) => (
                        <div
                            key={item.name}
                            className="relative mt-2 cursor-pointer flex gap-5 items-center"
                        >
                            <button
                                type="button"
                                className="h-5 w-5 rounded-md cursor-pointer shadow-sm"
                                // hydration error without ternary
                                style={{
                                    backgroundColor: item.color
                                        ? item.color
                                        : '',
                                }}
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
