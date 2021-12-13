<script>
	import { getContext } from 'svelte'

	let className = ''
	export { className as class }

	/** disabled page */
	export let disabled = false

	/** active page */
	export let active = false

	/**
	 * page variant
	 * @type {import('./types').Variant}
	 */
	export let variant = getContext('pagination:variant') ?? 'primary'

	/**
	 * size of page item
	 * @type { import('./types').Size }
	 */
	export let size = getContext('pagination:size') ?? 'md'
</script>

<li
	class="btn btn-{variant} btn-{size} {className}"
	class:btn-disabled={disabled}
	class:btn-active={active}>
	<slot />
</li>
