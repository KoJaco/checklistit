import React, { useState, useMemo } from 'react';

import Column from './Column';
// import ColumnItem from './ColumnItem';

type KanbanBoardProps = {};

const KanbanBoard = (props: KanbanBoardProps) => {
    return (
        <div>
            <Column />
        </div>
    );
};

export default KanbanBoard;
