import React from 'react';
import { useDrag } from 'react-dnd';
import type { DragSourceMonitor } from 'react-dnd';

type ColumnTemplateItem = {
    identifier: string;
    title: string;
};

interface ColumnTemplateProps {
    data: {
        id: string;
        type: string;
        column: ColumnTemplateItem;
    };
    forbidDrag?: boolean;
    children?: JSX.Element;
}

const ColumnTemplate = ({
    data,
    forbidDrag,
    children,
    ...props
}: ColumnTemplateProps) => {
    const [{ isDragging }, drag] = useDrag(
        () => ({
            type: data.type,
            canDrag: !forbidDrag,
            collect: (monitor: DragSourceMonitor) => ({
                isDragging: monitor.isDragging(),
            }),
        }),
        [forbidDrag, data]
    );

    const opacity = isDragging ? 0 : 0.9;

    return (
        <div
            className="flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-slate-800 dark:text-gray-200 dark:hover:text-black hover:bg-slate-200 m-2"
            ref={drag}
            style={{ opacity }}
        >
            <span className="capitalize">{data.column.title}</span>
        </div>
    );
};

export default ColumnTemplate;
