import { useUIContext } from '@/contexts/UIContextProvider';
import Sidebar from '@/components/sidebar/Sidebar';
import Navbar from '@/components/navbar/Navbar';

type BaseLayoutProps = {
    children: JSX.Element;
};

const BaseLayout = ({ children }: BaseLayoutProps) => {
    const { currentMode, activeMenu } = useUIContext();

    return (
        <div className={currentMode === 'dark' ? 'dark' : ''}>
            <div className="flex relative dark:bg-main-dark-bg">
                {activeMenu ? (
                    <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
                        <Sidebar />
                    </div>
                ) : (
                    <div className="w-0 dark:bg-secondary-dark-bg">
                        <Sidebar />
                    </div>
                )}
                <div
                    className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${
                        activeMenu ? 'md:ml-72' : 'flex-2'
                    }`}
                >
                    <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
                        <Navbar />
                    </div>
                    <div>{children}</div>
                </div>
            </div>
        </div>
    );
};

export default BaseLayout;
