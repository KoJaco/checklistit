import React, { useRef } from 'react';
import { useDrag } from 'react-dnd';
import { ROW } from '@/core/constants/dragDropConsts';
import Column from './Column';

import { Item, TRow, TColumn } from '@/core/types/dragDropTypes';

type RowProps = {
    rowItem: TRow;
    column: TColumn;
    columns: TColumn[];

    handleDrop: (dropZone: any, item: Item) => void;
    path: string;
};

const Row = (props: RowProps) => {
    const ref = useRef(null);

    const [{ isDragging }, drag] = useDrag(
        () => ({
            type: ROW,
            item: {
                id: props.rowItem.id,
                children: props.rowItem.children,
                path: props.path,
            },
            collect: (monitor) => ({
                isDragging: monitor.isDragging(),
            }),
        }),
        [props.path]
    );

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

    const opacity = isDragging ? 0 : 1;

    return (
        <div ref={drag} style={{ opacity }} data-testid="board">
            Row
        </div>
    );
};

export default Row;
