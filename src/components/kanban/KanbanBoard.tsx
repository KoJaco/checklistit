import React, { useState, useMemo, useCallback } from 'react';
import shortid from 'shortid';
import Row from './Row';
import DropZone from '@/components/dropZone/DropZone';
import { initialData } from '@/static/ts/initialData';
import {
    handleMoveWithinParent,
    handleMoveToDifferentParent,
    handleMoveColumnTemplatesIntoParent,
    handleRemoveItemFromLayout,
} from '@/core/utils/dragDrop';
import {
    COLUMN_TEMPLATE_ITEMS,
    COLUMN_TEMPLATE_ITEM,
    COLUMN_ITEM,
    COLUMN,
} from '@/core/constants/dragDropConsts';
import {
    TItem,
    TLayout,
    TRow,
    TColumn,
    TColumnItem,
    TColumnItemComponent,
    TDropZone,
} from '@/core/types/dragDropTypes';

type Item =
    | {
          id: string;
          type: string;
          children?: Children;
      }
    | undefined;

type Children = Array<Item> | undefined;

type ColumnTemplateItemComponent = {
    type: string;
    content: string;
};
interface KanbanBoardProps {
    // layout: TLayout;
    // rows: TRow[];
    // columns: TColumn[];
    // columnItems: TColumnItem[];
    // columnItemComponents: TColumnItemComponent[];

    path?: string;
    childrenCount?: number;
    columnTemplateItem?: {
        id: string;
        type: string;
        component: ColumnTemplateItemComponent;
    };
}

const KanbanBoard = (props: KanbanBoardProps) => {
    const initialLayout = initialData.layout;
    const initialColumnItems = initialData.columnItems;
    const [layout, setLayout] = useState(initialLayout);
    const [columnItems, setColumnItems] = useState(initialColumnItems);

    const handleDrop = useCallback((dropZone: TDropZone, item: TItem) => {
        const splitDropZonePath = dropZone.path.split('-');
        const pathToDropZone = splitDropZonePath.slice(0, -1).join('-');

        const newItem: TItem = {
            id: item.id,
            type: item.type,
        };

        if (item.type === COLUMN) {
            newItem.children = item.children;
        }
        if (item.type === COLUMN_TEMPLATE_ITEM) {
            // 1. move column template item into page
            const newColumn = {
                id: shortid.generate(),
                ...item.column,
            };
            const newItem = {
                id: newColumn.id,
                type: COLUMN,
            };
        }
    }, []);

    return (
        <div>
            <Row />
        </div>
    );
};

export default KanbanBoard;
