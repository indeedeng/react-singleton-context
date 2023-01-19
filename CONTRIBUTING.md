# Contributing

## Getting started

To begin working on `react-context-registry`,

1. clone the repo and `cd` into the project directory

2. activate the supported version of Node.js

```
nvm use
```

3. fetch and install dependencies

```
npm ci
```

## Build

Build the code and type definitions to `./dist`.

```
npm run build
```

See [`tsconfig.build.json`](./tsconfig.build.json) and [`rollup.config.js`](./rollup.config.js) for configuration.

## Quality checks

Run all quality checks:

```
npm run quality
```

### Lint

Lint for style with `eslint` and `prettier`.

```
npm run lint
```

Automatically fix lint issues where possible.

```
npm run lint:fix
```

See [`.eslintrc.js`](./.eslintrc.js) and [`.prettierrc.js`](./.prettierrc.js) for configuration.

### Test

Run unit tests with `jest`.

```
npm run test
```

Watch for changes to the code and rerun the tests.

```
npm run test:watch
```

See [`jest.config.js`](./jest.config.js) for configuration.
