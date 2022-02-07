<script>
	import { getContext } from 'svelte'
	import clsx from 'clsx'

	let className = ''
	export { className as class }

	/**
	 * color of range
	 * @type { import('../types').Variant }
	 *  */
	export let variant = undefined

	/**
	 * size of range
	 * @type {import('../types').Size}
	 */
	export let size = undefined

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

	$:classes = clsx(
		"ubeac-range",
		"range",
		size && 'range-' + size,
		variant && 'range-' + variant,
		className
	)
</script>

<input type="range"	{id} {name} {max} bind:value class={classes} />
