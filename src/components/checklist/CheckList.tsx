import React, { useRef, useState, useCallback, useMemo } from 'react';
import Button from '@/components/elements/Button';
import update from 'immutability-helper';
import { useUIContext } from '@/contexts/UIContextProvider';
import CheckListItem from './CheckListItem';
import { Task } from './types';
import { generateRandomString } from '@/core/utils/functions';
import { listData } from '@/static/ts/listData';
import { ItemTypes } from './types';
import { useDrop } from 'react-dnd';

type CheckListColumnProps = {
    children?: JSX.Element;
    currentTaskID?: string;
    tasks?: Task[];
    draggable?: boolean;
    index?: number;
    onDragStart?: Function;
    onDrop?: Function;
};

interface CheckListState {
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

const CheckList = (props: CheckListColumnProps) => {
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

    return (
        <div className="container">
            <div className="flex flex-row justify-between gap-x-5 h-auto">
                <div className="flex flex-col p-2 w-full rounded-md bg-[#FDF5DF] dark:bg-secondary-dark-bg shadow-md">
                    <ul ref={drop} className="w-full"></ul>
                    <Button
                        backgroundColor={`#FFFFFF00`}
                        buttonStyling="flex justify-center rounded-md cursor-pointer items-center bg-inherit"
                        // onClick={handleAddCheckListItem}
                    >
                        <div className="items-center">
                            <span>+</span>
                        </div>
                    </Button>
                    {items.map((item) => (
                        <CheckListItem
                            key={item.id}
                            id={`${item.id}`}
                            moveItem={moveItem}
                            findItem={findItem}
                            draggable={true}
                            text={item.text}
                        >
                            <span>{item.text}</span>
                        </CheckListItem>
                    ))}
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

export default CheckList;
