<script>
	import clsx from 'clsx'
	
	let className = ''
	export { className as class }

	/**
	 * specify size of badge
	 * @type {import('./types').Size}
	 */
	export let size = undefined

	/**
	 * specify the type of badge
	 * @type {import('./types').Color}
	 */
	export let variant = undefined

	/**
	 * only draw an outline
	 */
	export let outline = false

	$: classes = clsx(
		'badge', 
		size && 'badge-'+ size, 
		variant && 'badge-' + variant,
		outline && 'badge-outline',
		className
	)
</script>

<div class={classes}>
	<slot />
</div>
