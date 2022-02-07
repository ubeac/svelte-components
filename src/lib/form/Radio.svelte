<script>
	import { getContext } from 'svelte'
	import clsx from 'clsx'

	let className = ''
	export { className as class }

	/**
	 * color of radio
	 * @type {import('./types').Variant}
	 *  */
	export let variant = undefined

	/**
	 * size of radio
	 * @type {import('./types').Size}
	 */
	export let size = undefined

	/** specify disabled state*/
	export let disabled = false

	/** checked state of radio */
	export let checked = false

	/**
	 * @type {string}
	 */
	const name = getContext('radio:name')
	
	$: classes = clsx(
		'ubeac-radio',
		'radio',
		'mx-2',
		'my-1',
		size && 'radio-' + size,
		variant && 'radio-' + variant,
		className
	)
</script>

<label class="ubeac-radio-label flex flex-row items-center form-control">
	<input {disabled} {checked} {name} type="radio" class={classes} on:change />
	<slot />
</label>
