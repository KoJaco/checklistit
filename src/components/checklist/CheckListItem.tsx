import React, { useRef, useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { MdOutlineVerticalDistribute } from 'react-icons/md';
import { ItemTypes } from './types';

type CheckListItemProps = {
    children: JSX.Element;
    draggable: boolean;
    id: string;
    text: string;
    findItem: (id: string) => { index: number };
    moveItem: (id: string, to: number) => void;
};

interface Item {
    id: string;
    originalIndex: number;
}

const CheckListItem = ({ id, ...props }: CheckListItemProps) => {
    const itemRef = useRef(null);
    const originalIndex = props.findItem(id).index;
    const [{ isDragging }, drag] = useDrag(
        () => ({
            type: ItemTypes.LIST_ITEM,
            item: { id, originalIndex },
            collect: (monitor) => ({ isDragging: monitor.isDragging() }),
            end: (item, monitor) => {
                const { id: droppedId, originalIndex } = item;
                const didDrop = monitor.didDrop();
                if (!didDrop) {
                    props.moveItem(droppedId, originalIndex);
                }
            },
        }),
        [id, originalIndex, props.moveItem]
    );

    const [, drop] = useDrop(
        () => ({
            accept: ItemTypes.LIST_ITEM,
            hover({ id: draggedId }: Item) {
                if (draggedId !== id) {
                    const { index: overIndex } = props.findItem(id);
                    props.moveItem(draggedId, overIndex);
                }
            },
        }),
        [props.findItem, props.moveItem]
    );

    const opacity = isDragging ? 0 : 1;

    return (
        <li
            ref={(node) => drag(drop(node))}
            style={{ opacity: opacity }}
            className="rounded-lg drop-shadow-sm bg-slate-200 p-2"
        >
            {props.children}
        </li>
    );
};

export default CheckListItem;
