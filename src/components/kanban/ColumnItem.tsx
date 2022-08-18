import React from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { ItemTypes } from './types';

type ColumnItemProps = {
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

const ColumnItem = ({ id, ...props }: ColumnItemProps) => {
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
            className="rounded-md shadow bg-gray-50 dark:bg-main-dark-bg dark:text-gray-50 p-2 m-2 list-none"
        >
            {props.children}
        </li>
    );
};

export default ColumnItem;
