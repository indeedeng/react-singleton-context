# react-singleton-context

## About this project

React Singleton Context is a small library to alleviate the pain points that come with using React Context in micro-frontend architectures.

It is designed to be defined as a singleton, and it serves only one purpose: to offload the singleton requirements of React Context. This allows library maintainers to write their own modules, leverage context, and not have to worry about their own library being a singleton.

### How do I know if I need it?

If you have all three aspects below, chances are you'll want to use React Singleton Context:

-   A host application / platform which employs [Webpack's Module Federation](https://webpack.js.org/concepts/module-federation/).
-   A JavaScript / TypeScript library which employs React Context.
-   A federated application loaded by the above host application which employs the above library.

This is a rather niche architecture, but if you're here, likely you've run into a problem using React Context: no matter how you accessed your context in your federated application, it would not resolve until you singletonized the library.

But singletonization of the library, in solving one problem, creates another: the exact version of the singleton loaded by Webpack is defined by the entry point to your host application. If you have many entry points, and if those entry points are on different versions of the singletonized library, you'll eventually encounter version mismatch problems. And no one wants that!

So you're presented with two options:

1. Keep all entry points constantly up-to-date with the latest version of the singletonized library.
2. Use React Singleton Context.

Option 1 is operationally expensive. Option 2, we outline below.

## How to use React Singleton Context

### 1. Install React Singleton Context into the host application

First, add the package as a dependency, like so:

```
npm install react-singleton-context
```

or, if using Yarn:

```
yarn add react-singleton-context
```

Once that's done, go ahead and add it as an eager singleton to your Webpack config's Module Federation plugin declaration:

```typescript
	new ModuleFederationPlugin({
		...
		shared: {
			...
  			'react-singleton-context': { singleton: true, eager: true },
			...
		}
```

You'll also want to import the context registry into whatever bootstrapping code is always run by your host application upon client entry. That way, the entry point always loads the canonical version of the context registry, and it'll singletonize itself and any contexts created by it properly.

Something like this will suffice:

```typescript
import 'react-singleton-context';
```

Remember, your host application's setup might differ slightly from the above, so refer to your host application's owning team for exact details, if necessary.

### 2. Install React Singleton Context into any build-time library dependencies federated applications use

Like you did with the host application, it's time to add the package to the library:

```
npm install react-singleton-context --save-dev
```

or, if using Yarn:

```
yarn add react-singleton-context --dev
```

Then, add `react-singleton-context` as a `peerDependency` for this library, too. Doing so will necessitate a major version bump for your library, as that's a breaking change.

The following is example usage that a library maintainer might employ in the actual application code.

```typescript
import { createRegisteredContext } from 'react-singleton-context';

interface IExampleContext {
    message: string;
}

// Create the React.Context with createRegisteredContext instead of React.createContext
const ExampleContext = createRegisteredContext<IExampleContext | null>(
    'MyLibraryNameExampleContext', // a sufficiently globally unique displayName
    null // default value
);

// Export like normal; all consumers will be using a "singletonized" context
export default ExampleContext;
```

or, if not using TypeScript:

```javascript
import { createRegisteredContext } from 'react-singleton-context';

// Create the React.Context with createRegisteredContext instead of React.createContext
const ExampleContext = createRegisteredContext(
    'MyLibraryNameExampleContext', // a sufficiently globally unique displayName
    null // default value
);

// Export like normal; all consumers will be using a "singletonized" context
export default ExampleContext;
```

### 3. Update the build-time library version in federated applications

Now that your platform and your library are ready, it's time to update the federated application's dependencies to leverage the latest and greatest.

Optionally, if your library was previously singletonized (because you weren't able to use React Singleton Context previously to get around the context problem), you can safely de-singletonize it in the same commit.

And that's it! You're now using singletonized context.
