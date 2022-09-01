import { useUIContext } from '@/contexts/UIContextProvider';
import Sidebar from '@/components/sidebar/Sidebar';
import Navbar from '@/components/navbar/Navbar';
import Notification from '@/components/notification/Notification';

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
                    <div aria-live="assertive">
                        <>
                            {/* Global Notification component */}
                            <div className="fixed inset-0 flex justify-end items-start px-4 py-6 pointer-events-none sm:p-6 sm:items-start">
                                <Notification
                                    show={true}
                                    variant="success"
                                    headerMessage="Task successfully saved!"
                                    contentMessage="hello"
                                />
                            </div>
                            {children}
                        </>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BaseLayout;
