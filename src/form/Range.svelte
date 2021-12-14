<script>
	import { getContext } from 'svelte'

	let className = ''
	export { className as class }

	/**
	 * color of range
	 * @type { import('./types').Variant }
	 *  */
	export let variant = 'primary'

	/**
	 * size of range
	 * @type {import('./types').Size}
	 */
	export let size = 'md'

	/** current value of range */
	export let value = 0

	/** max value of range */
	export let max = 100

	/**
	 * name of range input
	 * @type {string}
	 * */
	export let name = getContext('form:name') ?? ''

	/**
	 * id of range
	 * @type {string}
	 */
	export let id = getContext('form:id') ?? name
</script>

<input
	type="range"
	{id}
	{name}
	{max}
	bind:value
	class="range range-{size} range-{variant} {className}" />
