import type { NextPage } from 'next';
import { trpc } from '@/core/utils/trpc';

const Me: NextPage = () => {
    const hello = trpc.useQuery(['example.hello', { text: 'from tRPC' }]);

    return (
        <>
            <div className="container">
                <div className="pt-6 text-4xl text-blue-500 flex justify-center items-center text-center w-full">
                    {hello.data ? (
                        <p>{hello.data.greeting}</p>
                    ) : (
                        <p>Loading..</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default Me;
