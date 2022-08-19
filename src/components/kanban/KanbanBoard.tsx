import React, { useState, useMemo } from 'react';

import { COLUMN_ITEM } from '@/core/constants/dragDropConsts';
import Column from './Column';

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
    path?: string;
    childrenCount?: number;
    columnTemplateItem?: {
        id: string;
        type: string;
        component: ColumnTemplateItemComponent;
    };
    layout?: Children;
}

const KanbanBoard = (props: KanbanBoardProps) => {
    return (
        <div>
            <Column acceptedDragSources={[COLUMN_ITEM]} />
        </div>
    );
};

export default KanbanBoard;
