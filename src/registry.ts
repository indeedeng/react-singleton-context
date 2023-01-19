import * as React from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const registry: Record<string, React.Context<any>> = {};

export const CONTEXT_NOT_FOUND =
    'The requested context was not found in the registry. Be sure to create it with createRegisteredContext first.';

const contextNameSymbol: unique symbol = Symbol('contextName');

declare module 'react' {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Context<T> {
        [contextNameSymbol]: string;
    }
}

/**
 * Creates a React Context of type T and registers it with the context registry to ensure it is served as a singleton.
 *
 * @param displayName Should be as globally unique as possible (e.g., MyLibraryName + ContextName).
 * @param defaultValue The value with which the React Context should initialize.
 * @returns The initialized context as a singleton.
 */
export function createRegisteredContext<T>(displayName: string, defaultValue: T): React.Context<T> {
    const context = React.createContext(defaultValue);
    context[contextNameSymbol] = context.displayName = displayName;
    if (!registry[displayName]) {
        registry[displayName] = context;
    }
    return registry[displayName];
}

/**
 * Returns a React Context of type T from the context registry.
 *
 * @param requestedContext The requested context. Must have been created with createRegisteredContext.
 * @returns The context singleton.
 */
export function getContext<T>(requestedContext: React.Context<T>): React.Context<T> {
    const lookupKey = requestedContext[contextNameSymbol];
    if (!lookupKey) {
        throw new Error(CONTEXT_NOT_FOUND);
    }
    return registry[lookupKey];
}
