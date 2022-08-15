import { useUIContext } from '@/contexts/UIContextProvider';

type BaseLayoutProps = {
    children: JSX.Element;
};

const BaseLayout = ({ children }: BaseLayoutProps) => {
    const { currentMode } = useUIContext();

    return (
        <div className={currentMode === 'dark' ? 'dark' : ''}>
            <div className="flex relative dark:bg-main-dark-bg"></div>
        </div>
    );
};
