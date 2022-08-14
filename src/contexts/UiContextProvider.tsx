// File for controlling global state of components.

import {
    createContext,
    ReactNode,
    useContext,
    useMemo,
    useReducer,
} from 'react';

// Main context for quick-notes
const CheckListIt = createContext<any>(null);

// Set custom name for the context which is invisible on react dev tools.
CheckListIt.displayName = 'CheckListItUiContext';

// types
interface StateTypes {
    miniSideNav: boolean;
    transparentSideNav: boolean;
    whiteSideNav: boolean;
    sideNavColor:
        | 'primary'
        | 'secondary'
        | 'info'
        | 'success'
        | 'warning'
        | 'danger'
        | 'light'
        | 'dark';
    transparentUpperNav: boolean;
    fixedUpperNav: boolean;
    openUISettings: boolean;
    direction: 'ltr' | 'rtl';
    layout: 'dashboard' | 'page';
    darkMode: boolean;
}

interface ActionTypes {
    type:
        | 'MINI_SIDENAV'
        | 'TRANSPARENT_SIDENAV'
        | 'WHITE_SIDENAV'
        | 'SIDENAV_COLOR'
        | 'TRANSPARENT_UPPERNAV'
        | 'FIXED_UPPERNAV'
        | 'OPEN_UI_SETTINGS'
        | 'DIRECTION'
        | 'LAYOUT'
        | 'DARK_MODE';
    value: any;
}

// State reducer
function reducer(state: StateTypes, action: ActionTypes) {
    switch (action.type) {
        case 'MINI_SIDENAV': {
            return { ...state, miniSideNav: action.value };
        }
        case 'TRANSPARENT_SIDENAV': {
            return { ...state, transparentSideNav: action.value };
        }
        case 'WHITE_SIDENAV': {
            return { ...state, whiteSideNav: action.value };
        }
        case 'SIDENAV_COLOR': {
            return { ...state, sideNavColor: action.value };
        }
        case 'TRANSPARENT_UPPERNAV': {
            return { ...state, transparentUpperNav: action.value };
        }
        case 'FIXED_UPPERNAV': {
            return { ...state, fixedUpperNav: action.value };
        }
        case 'OPEN_UI_SETTINGS': {
            return { ...state, openConfigurer: action.value };
        }
        case 'DIRECTION': {
            return { ...state, direction: action.value };
        }
        case 'LAYOUT': {
            return { ...state, layout: action.value };
        }

        case 'DARK_MODE': {
            return { ...state, darkMode: action.value };
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
}

function CheckListItControllerProvider({
    children,
}: {
    children: ReactNode;
}): JSX.Element {
    const initialState: StateTypes = {
        miniSideNav: false,
        transparentSideNav: false,
        whiteSideNav: false,
        sideNavColor: 'primary',
        transparentUpperNav: true,
        fixedUpperNav: true,
        openUISettings: false,
        direction: 'ltr',
        layout: 'dashboard',
        darkMode: true,
    };

    const [controller, dispatch] = useReducer(reducer, initialState);

    const value = useMemo(() => [controller, dispatch], [controller, dispatch]);

    return (
        <CheckListIt.Provider value={value}>{children}</CheckListIt.Provider>
    );
}

// custom hook for using context
function useCheckListItController() {
    const context = useContext(CheckListIt);

    if (!context) {
        throw new Error(
            'useQuickNotesController should be used inside of QuickNotesControllerProvider'
        );
    }

    return context;
}

// context module functions

const setMiniSideNav = (
    dispatch: (arg: { type: 'MINI_SIDENAV'; value: boolean }) => void,
    value: boolean
) => dispatch({ type: 'MINI_SIDENAV', value });

const setTransparentSideNav = (
    dispatch: (arg: { type: 'TRANSPARENT_SIDENAV'; value: boolean }) => void,
    value: boolean
) => dispatch({ type: 'TRANSPARENT_SIDENAV', value });

const setWhiteSideNav = (
    dispatch: (arg: { type: 'WHITE_SIDENAV'; value: boolean }) => void,
    value: boolean
) => dispatch({ type: 'WHITE_SIDENAV', value });

const setSideNavColor = (
    dispatch: (arg: {
        type: 'SIDENAV_COLOR';
        value:
            | 'primary'
            | 'secondary'
            | 'info'
            | 'success'
            | 'warning'
            | 'error'
            | 'light'
            | 'dark';
    }) => void,
    value:
        | 'primary'
        | 'secondary'
        | 'info'
        | 'success'
        | 'warning'
        | 'error'
        | 'light'
        | 'dark'
) => dispatch({ type: 'SIDENAV_COLOR', value });

const setTransparentUpperNav = (
    dispatch: (arg: { type: 'TRANSPARENT_UPPERNAV'; value: boolean }) => void,
    value: boolean
) => dispatch({ type: 'TRANSPARENT_UPPERNAV', value });

const setFixedUpperNav = (
    dispatch: (arg: { type: 'FIXED_UPPERNAV'; value: boolean }) => void,
    value: boolean
) => dispatch({ type: 'FIXED_UPPERNAV', value });

const setOpenUISettings = (
    dispatch: (arg: { type: 'OPEN_UI_SETTINGS'; value: boolean }) => void,
    value: boolean
) => dispatch({ type: 'OPEN_UI_SETTINGS', value });

const setDirection = (
    dispatch: (arg: { type: 'DIRECTION'; value: 'ltr' | 'rtl' }) => void,
    value: 'ltr' | 'rtl'
) => dispatch({ type: 'DIRECTION', value });

const setLayout = (
    dispatch: (arg: { type: 'LAYOUT'; value: 'dashboard' | 'page' }) => void,
    value: 'dashboard' | 'page'
) => dispatch({ type: 'LAYOUT', value });

const setDarkMode = (
    dispatch: (arg: { type: 'DARK_MODE'; value: boolean }) => void,
    value: boolean
) => dispatch({ type: 'DARK_MODE', value });

export {
    CheckListItControllerProvider,
    useCheckListItController,
    setMiniSideNav,
    setTransparentSideNav,
    setWhiteSideNav,
    setSideNavColor,
    setTransparentUpperNav,
    setFixedUpperNav,
    setOpenUISettings,
    setDirection,
    setLayout,
    setDarkMode,
};
