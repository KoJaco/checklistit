import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { trpc } from '@/core/utils/trpc';
import BaseLayout from '@/layouts/BaseLayout';
import KanbanBoard from '@/components/kanban/KanbanBoard';

import initialData from '@/static/ts/initialData';

// const DynamicCheckList = dynamic(() => import('@/components/kanban/Column'), {
//     ssr: false,
// });

const Home: NextPage = () => {
    return (
        <>
            <BaseLayout>
                <main className="container mx-auto flex flex-col items-center justify-center h-screen p-10 dark:bg-main-dark-bg">
                    <div className="w-full h-auto mt-20 p-5 ">
                        {/* Kanban component */}
                        <KanbanBoard />
                    </div>
                </main>
            </BaseLayout>
        </>
    );
};

export default Home;
