import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { trpc } from '@/core/utils/trpc';
import BaseLayout from '@/layouts/BaseLayout';
import CheckList from '@/components/checklist/CheckList';

const DynamicCheckList = dynamic(
    () => import('@/components/checklist/CheckList'),
    { ssr: false }
);

const initialData = {
    tasks: {
        1: { id: 1, content: 'Configure Next.js application' },
        2: { id: 2, content: 'Configure Next.js and tailwind ' },
        3: { id: 3, content: 'Create sidebar navigation menu' },
        4: { id: 4, content: 'Create page footer' },
        5: { id: 5, content: 'Create page navigation menu' },
        6: { id: 6, content: 'Create page layout' },
    },
    checkLists: {
        'column-1': {
            id: 'column-1',
            title: 'TO-DO',
            taskIds: [1, 2, 3, 4, 5, 6],
        },
        'column-2': {
            id: 'column-2',
            title: 'IN-PROGRESS',
            taskIds: [],
        },
        'column-3': {
            id: 'column-3',
            title: 'COMPLETED',
            taskIds: [],
        },
    },
    // Facilitate reordering of the columns
    columnOrder: ['column-1', 'column-2', 'column-3'],
};

type TSourceCheckList = {
    id: string;
    title: string;
    taskIds: number[];
};

const Home: NextPage = () => {
    return (
        <>
            <BaseLayout>
                <main className="container mx-auto flex flex-col items-center justify-center h-screen p-10 dark:bg-main-dark-bg">
                    <div className="w-full h-auto mt-20 p-5 ">
                        {/* Checklist component */}
                        <CheckList />
                    </div>
                </main>
            </BaseLayout>
        </>
    );
};

export default Home;
