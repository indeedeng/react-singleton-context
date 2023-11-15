import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const extensions = ['.ts', '.tsx'];

export default {
    input: './src/index.ts',
    output: [
        {
            dir: 'dist/esm',
            format: 'esm',
            sourcemap: true,
            entryFileNames: (chunkInfo) => `${chunkInfo.name}.mjs`
        },
        {
            dir: 'dist/cjs',
            format: 'cjs',
            sourcemap: true,
            exports: 'auto'
        }
    ],
    plugins: [
        peerDepsExternal(),
        nodeResolve({
            extensions
        }),
        commonjs({
            include: /node_modules/
        }),
        babel({
            extensions,
            exclude: /node_modules/,
            babelHelpers: 'runtime',
            configFile: './babel.config.js'
        })
    ]
};
