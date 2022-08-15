import React from 'react';
import { useUIContext } from '@/contexts/UIContextProvider';
import { BsCheck } from 'react-icons/bs';
import { themeColors } from '@/static/ts/theme';

const ThemeSettings = () => {
    const { setColor, setMode, currentMode, currentColor } = useUIContext();

    return (
        <div className="bg-inherit w-full h-auto">
            {/* Theme options */}
            <div className="flex-col p-4">
                <div className="mt-4">
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
                <div className="mt-4">
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
                    {themeColors.map((item, index) => (
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
