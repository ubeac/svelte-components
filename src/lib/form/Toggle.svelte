<script>
	import clsx from 'clsx'
	
	let className = ''
	export { className as class }

	/** specify checked state*/
	export let checked = false

	/**
	 * specify disabled state
	 */
	export let disabled = false

	/**
	 * variant of toggle
	 * @type { import('./types').Variant }
	 *  */
	export let variant = undefined

	/**
	 * size of toggle
	 * @type {import('./types').Size}
	 */
	export let size = undefined

	/** name for input tag */
	export let name;

	$: classes = clsx(
		'ubeac-toggle',
		'toggle',
		'mx-2',
		'my-1',
		variant && 'toggle-' + variant,
		size && 'toggle-' + size,
		className
	)
	

</script>

<label class="ubeac-toggle-label flex flex-row items-center form-control">
	<input {disabled} {name} type="checkbox" bind:checked class={classes} />
	<slot />
</label>
