import React from 'react';
import clsx from 'clsx';
import { useDrop, DropTargetMonitor } from 'react-dnd';
import {
    COLUMN_ITEM,
    COLUMN_TEMPLATE_ITEM,
    ROW,
    COLUMN,
} from '@/static/ts/constants';

const ACCEPTS = [COLUMN_TEMPLATE_ITEM, COLUMN_ITEM, ROW, COLUMN];

type Item =
    | {
          id: string;
          type: string;
          children?: Children;
      }
    | undefined;

type Children = Array<Item> | undefined;

type DropZoneData = {
    path: string;
    childrenCount: number;
};

type DropZoneProps = {
    data: DropZoneData;
    onDrop: (item: Item, dropZone: DropZoneData) => void;
    isLast: boolean;
    currentlyActive?: boolean;
    customStyling?: string;
};

const DropZone = ({ isLast, ...props }: DropZoneProps) => {
    const [{ isOver, canDrop }, drop] = useDrop({
        accept: ACCEPTS,
        drop: (item: Item, monitor) => {
            props.onDrop(item, props.data);
        },
        // canDrop: (item, monitor) => {
        //     const dropZonePath = props.data.path;
        //     const splitDropZonePath = dropZonePath.split('-');
        //     const itemPath = item.path;
        // },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
            isOverCurrent: monitor.isOver({ shallow: true }),
        }),
    });
    // [greedy, setHasDropped, setHasDroppedOnChild]

    const isActive = isOver && canDrop;

    return (
        <div
            className={clsx(
                'dropzone',
                { active: isActive, isLast },
                props.customStyling
            )}
            ref={drop}
        ></div>
    );
};

export default DropZone;
