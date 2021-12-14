import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import svelte from 'rollup-plugin-svelte'
import postcss from 'rollup-plugin-postcss'
import typescript from 'rollup-plugin-typescript'
import preprocess from 'svelte-preprocess'

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
        // extract all css of components in temp.css file 
        postcss({extract: 'temp.css'}),
        resolve({
            browser: true,
            dedupe: [
                "svelte"
            ]
        }),
        commonjs(),
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
            }), {
                name: 'Merge css files',
                writeBundle (options) {
                    // copy content of ./dist/temp.css to styles
                    fs.appendFileSync('./dist/styles.css', 
                        fs.readFileSync('./dist/temp.css'))
                }
            },
            {
                name: "remove style.js", 
                writeBundle (options) {
                    fs.unlinkSync(options.file)
                    fs.unlinkSync('./dist/temp.css') // remove temp.css at the end
                }
            }
        ]
    }
]