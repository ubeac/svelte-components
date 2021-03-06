import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-static'

export default {
    preprocess: preprocess(),
    kit: {
        adapter: adapter(),
        target: '#svelte',
        vite: {
            resolve: {
                alias: {
                    '@ubeac/svelte-components': '$lib'
                }
            }
        }
    }
}