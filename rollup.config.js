import resolve from '@rollup/plugin-node-resolve'
import svelte from 'rollup-plugin-svelte'
import postcss from 'rollup-plugin-postcss'
import typescript from 'rollup-plugin-typescript'
import preprocess from 'svelte-preprocess'

// import packageJson from './package.json' 

import fs from 'fs'

/**
 * @type {import('rollup').RollupOptions}
 */
export default [
    {
    input: './src/index.js',
    output: [
        {
            file: './dist/index.mjs',
            format: 'esm',
            
        }, 
        {
            file: './dist/index.cjs',
            format: 'cjs'
        }
    ],
    plugins: [
        typescript(),
        svelte({
            preprocess: preprocess()
        }),
        resolve({
            dedupe: [
                "svelte"
            ]
        }),
    ]
    }, 
    {
        input: './src/styles.css',
        output: {
            file: './dist/styles.js'
        },
        plugins: [
            postcss({
                config: './postcss.config.js',
                extract: 'styles.css'
            }), 
            {
                name: "remove style.js", 
                writeBundle (options) {
                    fs.unlinkSync(options.file)
                }
            }
        ]
    }
]