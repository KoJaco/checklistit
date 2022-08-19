import shortid from 'shortid';
import { ROW, COLUMN, COMPONENT } from '@/static/ts/constants';

type Item =
    | {
          id: string;
          type: string;
          children?: Children;
      }
    | undefined;

type Children = Array<Item> | undefined;

export const reorderItems = (
    ls: Array<Item | undefined>,
    startIndex: number,
    endIndex: number
) => {
    // Function to re-order results, accepts generic array type
    const result = Array.from(ls);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed); // insert task at new index
    return result;
};

export const removeItem = (arr: Array<Item>, index: number) => [
    // slice array before given index
    ...arr.slice(0, index),
    // everything after the given index
    ...arr.slice(index + 1),
];

export const insertItem = (
    arr: Array<Item | undefined>,
    index: number,
    newItem: Item
) => [
    // slice array before given index
    ...arr.slice(0, index),
    // insert the new item
    newItem,
    // spread in array after index
    ...arr.slice(index),
];

export const reorderChildren = <T>(
    children: Children,
    splitDropZonePath: Array<T>,
    splitItemPath: Array<T>
) => {
    if (splitDropZonePath.length === 1 && children !== undefined) {
        // if there is only one path.
        const dropZoneIndex = Number(splitDropZonePath[0]);
        const itemIndex = Number(splitItemPath[0]);
        return reorderItems(children, itemIndex, dropZoneIndex);
    }

    const updatedChildren = children !== undefined && [...children];

    const currentIndex = Number(splitDropZonePath.slice(0, 1));

    // update the specific node's children
    const splitDropZoneChildrenPath = splitDropZonePath.slice(1);
    const splitItemChildrenPath = splitItemPath.slice(1);

    const nodeChildren = updatedChildren && updatedChildren[currentIndex];

    if (updatedChildren && nodeChildren && nodeChildren !== undefined) {
        updatedChildren[currentIndex] = {
            ...nodeChildren,
            children: reorderChildren(
                nodeChildren!.children,
                splitDropZoneChildrenPath,
                splitItemChildrenPath
            ),
        };
    }

    return updatedChildren ? updatedChildren : undefined;
};

export const removeChildFromChildren = <T>(
    children: Children,
    splitItemPath: Array<T>
) => {
    if (splitItemPath.length === 1 && children !== undefined) {
        const itemIndex = Number(splitItemPath[0]);
        return removeItem(children, itemIndex);
    }

    const updatedChildren = children !== undefined && [...children];

    const currentIndex = Number(splitItemPath.slice(0, 1));

    // update the specific node's children
    const splitItemChildrenPath = splitItemPath.slice(1);
    const nodeChildren = updatedChildren && updatedChildren[currentIndex];

    if (updatedChildren && nodeChildren && nodeChildren !== undefined) {
        updatedChildren[currentIndex] = {
            ...nodeChildren,
            children: removeChildFromChildren(
                nodeChildren.children,
                splitItemChildrenPath
            ),
        };
    }

    return updatedChildren ? updatedChildren : undefined;
};

export const addChildToChildren = <T>(
    children: Children,
    splitDropZonePath: Array<T>,
    item: Item
) => {
    if (splitDropZonePath.length === 1 && children !== undefined) {
        const dropZoneIndex = Number(splitDropZonePath[0]);
        return insertItem(children, dropZoneIndex, item);
    }

    const updatedChildren = children !== undefined && [...children];
    const currentIndex = Number(splitDropZonePath.slice(0, 1));

    // updated specific node's children
    const splitItemChildrenPath = splitDropZonePath.slice(1);
    const nodeChildren = updatedChildren && updatedChildren[currentIndex];
    if (updatedChildren && nodeChildren && nodeChildren !== undefined) {
        updatedChildren[currentIndex] = {
            ...nodeChildren,
            children: addChildToChildren(
                nodeChildren.children,
                splitItemChildrenPath,
                item
            ),
        };
    }

    return updatedChildren ? updatedChildren : undefined;
};

export const handleMoveWithinParent = <T>(
    // Layout is just the overarching structure, Children share the same type.
    layout: Children,
    splitDropZonePath: Array<T>,
    splitItemPath: Array<T>
) => {
    return reorderChildren(layout, splitDropZonePath, splitItemPath);
};

export const handleAddColumnDataToRow = (layout: Children) => {
    const layoutCopy = layout !== undefined && [...layout];
    const COLUMN_STRUCTURE = {
        type: COLUMN,
        id: shortid.generate(),
        children: [],
    };

    return layoutCopy
        ? layoutCopy.map((row) => {
              if (row?.children !== undefined && !row.children.length) {
                  row.children = [COLUMN_STRUCTURE];
              }
              return row;
          })
        : undefined;
};

export const handleMoveToDifferentParent = <T>(
    layout: Children,
    splitDropZonePath: Array<T>,
    splitItemPath: Array<T>,
    item: Item
) => {
    let newLayoutStructureItem: Item;

    const COLUMN_STRUCTURE = {
        type: COLUMN,
        id: shortid.generate(),
        children: [item],
    };

    const ROW_STRUCTURE = {
        type: ROW,
        id: shortid.generate(),
    };

    switch (splitDropZonePath.length) {
        case 1: {
            // moving column outside into new row made on the fly
            if (item !== undefined && item.type === COLUMN) {
                newLayoutStructureItem = {
                    ...ROW_STRUCTURE,
                    children: [item],
                };
            } else {
                // moving component outside into new row made on the fly
                newLayoutStructureItem = {
                    ...ROW_STRUCTURE,
                    children: [COLUMN_STRUCTURE],
                };
            }
            break;
        }
        case 2: {
            // moving component outside into a row which creates a column
            if (item?.type === COMPONENT) {
                newLayoutStructureItem = COLUMN_STRUCTURE;
            } else {
                // moving column into existing row
                newLayoutStructureItem = item;
            }
            break;
        }
        default: {
            newLayoutStructureItem = item;
        }
    }

    let updatedLayout = layout;
    updatedLayout = removeChildFromChildren(updatedLayout, splitItemPath);
    updatedLayout = handleAddColumnDataToRow(updatedLayout);
    updatedLayout = addChildToChildren(
        updatedLayout,
        splitDropZonePath,
        newLayoutStructureItem
    );

    return updatedLayout;
};

export const handleMoveColumnTemplatesIntoParent = <T>(
    layout: Children,
    splitDropZonePath: Array<T>,
    item: Item
) => {
    let newLayoutStructureItem: Item;
    switch (splitDropZonePath.length) {
        case 1: {
            newLayoutStructureItem = {
                type: ROW,
                id: shortid.generate(),
                children: [
                    { type: COLUMN, id: shortid.generate(), children: [item] },
                ],
            };
            break;
        }
        case 2: {
            newLayoutStructureItem = {
                type: COLUMN,
                id: shortid.generate(),
                children: [item],
            };
            break;
        }
        default: {
            newLayoutStructureItem = item;
        }
    }

    return addChildToChildren(
        layout,
        splitDropZonePath,
        newLayoutStructureItem
    );
};

export const handleRemoveItemFromLayout = <T>(
    layout: Children,
    splitItemPath: Array<T>
) => {
    return removeChildFromChildren(layout, splitItemPath);
};
