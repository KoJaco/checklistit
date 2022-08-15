import type { NextPage } from 'next';
import { trpc } from '@/core/utils/trpc';

// const hello = trpc.useQuery(['example.hello', { text: 'from tRPC' }]);

// {hello.data ? (
//     <p>{hello.data.greeting}</p>
// ) : (
//     <p>Loading..</p>
// )}

const Home: NextPage = () => {
    return (
        <>
            <main className="container mx-auto flex flex-col items-center justify-center h-screen p-4 dark:bg-main-dark-bg"></main>
        </>
    );
};

export default Home;
