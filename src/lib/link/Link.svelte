<script>
	import clsx from 'clsx'
	
	let className = ''
	export { className as class }

	/**
	 * href of link
	 * @type {string}
	 */
	export let href = undefined

	/**
	 * draw underline on hover
	 */
	export let hover = false

	/**
	 * color of link
	 * @type {import('./types').Variant}
	 */
	export let variant = undefined

	$: classes = clsx('link', variant && 'link-'+variant, hover && 'link-hover', className)
</script>

<a on:click {href} class={classes}>
	<slot />
</a>
