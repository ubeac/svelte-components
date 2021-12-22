<script>
	import { setContext } from 'svelte'

	let className = ''
	export { className as class }

	/**
	 * pagination variant
	 * @type {import('./types').Variant}
	 */
	export let variant = 'primary'

	setContext('pagination:variant', variant)
</script>

<ul class="btn-group {className}">
	<slot />
</ul>
