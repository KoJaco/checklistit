import { useUIContextProvider } from '@/contexts/UIContextProvider';

type BaseLayoutProps = {
    children: JSX.Element;
};

const BaseLayout = ({ children }: BaseLayoutProps) => {
    const { darkMode } = useUIContextProvider();

    return (
        <div className={darkMode ? 'dark' : ''}>
            <div className="flex relative dark:bg-main-dark-bg"></div>
        </div>
    );
};
