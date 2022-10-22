/**
 * @type {import('rollup').RollupOptions}
 */
// eslint-disable import/no-extraneous-dependencies
import dts from 'rollup-plugin-dts'
import json from '@rollup/plugin-json'
import { terser } from 'rollup-plugin-terser'
import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { babel } from '@rollup/plugin-babel'
import replace from '@rollup/plugin-replace'
import del from 'rollup-plugin-delete'
import externals from 'rollup-plugin-node-externals'
import svg from 'rollup-plugin-svg'

// eslint-disable-next-line import/no-anonymous-default-export
export default [
    {
        input: './src/index.ts',
        output: [
            {
                file: 'dist/index.esm.js',
                format: 'esm',
                plugins: [terser()],
            },
            {
                file: 'dist/index.cjs.js',
                format: 'cjs',
                plugins: [terser()],
            },
        ],
        plugins: [
            json({ compact: true }),
            svg(),
            externals(),
            nodeResolve({ extensions: ['.ts', '.tsx', '.js', '.jsx'], preferBuiltins: true }),
            commonjs({ ignoreGlobal: true, include: ['node_modules/**'], extensions: ['.js', '.json'] }),
            babel({
                babelHelpers: 'runtime',
                extensions: ['.ts', '.tsx', '.js', '.jsx'],
                exclude: 'node_modules/**',
            }),
            del({ targets: 'dist/*' }),
            replace({
                preventAssignment: true,
                'process.env.NODE_ENV': JSON.stringify('production'),
            }),
        ],
        external: [/@babel\/runtime/],
    },
    {
        input: './src/index.ts',
        output: {
            file: 'dist/index.d.ts',
            format: 'es',
        },
        plugins: [
            nodeResolve({ extensions: ['.ts', '.tsx', '.js', '.jsx'], preferBuiltins: true }),
            dts(),
        ],
        external: [/\.json/],
    },
]
