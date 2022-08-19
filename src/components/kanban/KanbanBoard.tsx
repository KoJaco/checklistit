import React, { useState, useMemo } from 'react';

import Column from './Column';
// import ColumnItem from './ColumnItem';

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
    path: string;
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
            <Column />
        </div>
    );
};

export default KanbanBoard;
