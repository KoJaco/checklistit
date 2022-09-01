import { createRouter } from './context';
import { z } from 'zod';
import { nanoid } from 'nanoid';

export const exampleRouter = createRouter()
    .query('hello', {
        input: z
            .object({
                text: z.string().nullish(),
            })
            .nullish(),
        resolve({ input }) {
            return {
                greeting: `Hello ${input?.text ?? 'world'}`,
            };
        },
    })
    .mutation('createBoard', {
        input: z.object({
            title: z.string().nullish(),
            // date or string, think fewer function calls with date.
            createdAt: z.date(),
            updatedAt: z.date(),
            // tasks { [keyof typeof string] { id: number, content: string}}
            // columns { [keyof typeof string] { id: string, title: string, taskIds: string[], bgColor: string;}}
            // columnOrder: keyof columns[]
        }),
        resolve({ input }) {
            // db call
            return {
                id: `${nanoid()}`,
                ...input,
            };
        },
    })
    .mutation('createTask', {
        input: z.object({
            taskCount: z.number(),
        }),
        resolve({ input }) {
            return {
                id: `task-${input.taskCount}`,
                ...input,
            };
        },
    })
    .mutation('createColumn', {
        input: z.object({
            columnCount: z.number(),
        }),
        resolve({ input }) {
            return {
                id: `column-${input.columnCount}`,
                ...input,
            };
        },
    });
