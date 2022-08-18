import React, { useRef, useState, useCallback, useMemo } from 'react';
import Button from '@/components/elements/Button';
import update from 'immutability-helper';
import { useUIContext } from '@/contexts/UIContextProvider';
import ColumnItem from './ColumnItem';
import { Task } from './types';
import { generateRandomString } from '@/core/utils/functions';
import { ItemTypes } from './types';
import { useDrop } from 'react-dnd';

type ColumnProps = {
    children?: JSX.Element;
    currentTaskID?: string;
    tasks?: Task[];
    draggable?: boolean;
    index?: number;
    onDragStart?: Function;
    onDrop?: Function;
};

interface ColumnState {
    items: any[];
}

const ITEMS = [
    {
        id: 1,
        text: 'Write a cool JS library',
    },
    {
        id: 2,
        text: 'Make it generic enough',
    },
    {
        id: 3,
        text: 'Write README',
    },
    {
        id: 4,
        text: 'Create some examples',
    },
    {
        id: 5,
        text: 'Spam in Twitter and IRC to promote it',
    },
    {
        id: 6,
        text: '???',
    },
    {
        id: 7,
        text: 'PROFIT',
    },
];

const Column = (props: ColumnProps) => {
    const [items, setItems] = useState(ITEMS);
    const findItem = useCallback(
        (id: string) => {
            const item = items.filter((c) => `${c.id}` === id)[0] as {
                id: number;
                text: string;
            };
            return {
                item,
                index: items.indexOf(item),
            };
        },
        [items]
    );
    const moveItem = useCallback(
        (id: string, atIndex: number) => {
            const { item, index } = findItem(id);
            setItems(
                update(items, {
                    $splice: [
                        [index, 1],
                        [atIndex, 0, item],
                    ],
                })
            );
        },
        [findItem, items, setItems]
    );

    const [, drop] = useDrop(() => ({ accept: ItemTypes.LIST_ITEM }));

    // https://tailwindui.com/components/application-ui/forms/textareas
    return (
        <div className="container">
            <div className="flex flex-row justify-between gap-x-5 h-auto">
                <div className="flex flex-col p-2 w-full rounded-md bg-[#FDF5DF] dark:bg-secondary-dark-bg shadow-md">
                    <ul ref={drop} className="w-full">
                        {items.map((item) => (
                            <div key={item.id}>
                                <ColumnItem
                                    key={item.id}
                                    id={`${item.id}`}
                                    moveItem={moveItem}
                                    findItem={findItem}
                                    draggable={true}
                                    text={item.text}
                                >
                                    <span>{item.text}</span>
                                </ColumnItem>
                            </div>
                        ))}
                    </ul>
                    <Button
                        backgroundColor={`#FFFFFF00`}
                        buttonStyling="flex justify-center rounded-md cursor-pointer items-center bg-inherit"
                        // onClick={handleAddCheckListItem}
                    >
                        <div className="items-center">
                            <span className="text-2xl">+</span>
                        </div>
                    </Button>
                </div>

                {/* <div className="flex flex-col w-full p-2 rounded-md bg-slate-100 shadow-md">
                    <ul>
                        <Draggable axis="y" bounds="parent">
                            <div className="p-2">
                                <CheckListItem>
                                    <span></span>
                                </CheckListItem>
                            </div>
                        </Draggable>
                    </ul>
                </div>
                <div className="flex flex-col w-full p-2 rounded-md bg-slate-100 shadow-md">
                    <ul>
                        <Draggable axis="y">
                            <div className="p-2">
                                <CheckListItem>
                                    <span></span>
                                </CheckListItem>
                            </div>
                        </Draggable>
                    </ul>
                </div> */}
            </div>
        </div>
    );
};

export default Column;
