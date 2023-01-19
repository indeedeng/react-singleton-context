import * as React from 'react';
import { createRegisteredContext, getContext, CONTEXT_NOT_FOUND } from './registry';

describe('registry', () => {
    it('should set and then return a context seen for the first time', () => {
        const Context = createRegisteredContext('helloContext', null);
        const SingletonContext = getContext(Context as React.Context<unknown>);
        expect(SingletonContext).toBe(Context);
    });

    it('should return a context seen for the second time', () => {
        const Context1 = createRegisteredContext('randomContext', null);
        const Context2 = createRegisteredContext('randomContext', null);
        const SingletonContext1 = getContext(Context1 as React.Context<unknown>);
        const SingletonContext2 = getContext(Context2 as React.Context<unknown>);
        expect(SingletonContext1).toBe(Context1);
        expect(SingletonContext2).toBe(Context1); // Intentionally Context1
    });

    it('should throw when a context is not found', () => {
        const GoodbyeContext = React.createContext<null>(null);
        expect(() => {
            getContext(GoodbyeContext);
        }).toThrow(CONTEXT_NOT_FOUND);
    });
});
