import svelte from "rollup-plugin-svelte";
import postcss from "rollup-plugin-postcss";
import resolve from "@rollup/plugin-node-resolve"
import copy from "rollup-plugin-copy"
import alias from "rollup-plugin-alias"
import path from 'path'

const exampleDir = path.resolve(__dirname)

export default {
    input: './example/src/index.js',
    output: {
        file: './example/build/index.js'
    },
    plugins: [
        postcss({
            config: './example/postcss.config.cjs',
            extract: 'style.css',
            extensions: ['.css']
        }),
        svelte(),
        resolve(),
        copy({
            targets: [
                { src: './example/index.html', dest: './example/build'},
            ]
        }), 
        alias({
            entries: [
                { find: '@ubeac/svelte-components', replacement: path.resolve(exampleDir, '..', 'src', 'index.js')}
            ]
        })
    ]
}