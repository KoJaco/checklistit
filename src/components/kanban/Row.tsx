import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { ROW } from '@/core/constants/dragDropConsts';

import { TItem, TRow, TColumn } from '@/core/types/dragDropTypes';
import { COLUMN, COLUMN_ITEM } from '@/core/constants/dragDropConsts';

import Column from './Column';

const ACCEPTED_DROP_SOURCES = [COLUMN];

type RowProps = {
    rowItem?: TRow;
    column?: TColumn;
    columns?: TColumn[];

    handleDrop?: (dropZone: any, item: TItem) => void;
    // only accepts a column to drop.
    onDrop?: (column: TColumn) => void;
    path?: string;
};

const Row = (props: RowProps) => {
    const ref = useRef(null);

    const [{ isDragging }, drag] = useDrag(
        () => ({
            type: ROW,
            item: {
                id: props.rowItem?.id,
                children: props.rowItem?.children,
                path: props.path,
            },
            collect: (monitor) => ({
                isDragging: monitor.isDragging(),
            }),
        }),
        [props.path]
    );

    const [{ isOver, canDrop }, drop] = useDrop(() => ({
        accept: COLUMN,
        drop: props.onDrop,
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    }));

    // const renderColumn = (column: Item, currentPath: string) => {
    //     return (
    //         <Column
    //             key={column.id}
    //             data={column}
    //             columnItems={
    //                 props.columns.children !== undefined &&
    //                 props.columns.children
    //             }
    //             columnItem={
    //                 props.columns.children !== undefined &&
    //                 props.column.children
    //             }
    //         />
    //     );
    // };

    const isActive = isOver && canDrop;
    let backgroundColor = '#222';
    if (isActive) {
        backgroundColor = 'darkgreen';
    } else if (canDrop) {
        backgroundColor = 'darkkhaki';
    }

    const opacity = isDragging ? 0 : 1;

    return (
        <div
            ref={drag}
            style={{ opacity, backgroundColor }}
            data-testid="row"
            className="flex flex-row w-full"
        >
            <Column acceptedDragSources={[COLUMN_ITEM]} />
            <Column acceptedDragSources={[COLUMN_ITEM]} />
            <Column acceptedDragSources={[COLUMN_ITEM]} />
        </div>
    );
};

export default Row;
