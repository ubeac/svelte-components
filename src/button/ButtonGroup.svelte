<script>
	import { setContext } from 'svelte'

	let className = ''
	export { className as class }

	/**
	 * size of buttons
	 * @type {import('./types').Size}
	 */
	export let size = "md"

	/**
	 * buttons variant
	 * @type {import('./types').Variant}
	 */
	export let variant = 'primary'

	setContext('button:size', size)
	setContext('button:variant', variant)
</script>

<div class="btn-group {className}">
	<slot />
</div>
