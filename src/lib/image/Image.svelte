<script>
	import clsx from 'clsx'
	let className = ''
	export { className as class }

	/** source of image*/
	export let src

	/** alt text of image*/
	export let alt

	/**
	 * round corners
	 * @type { boolean | "full" }
	 */
	export let rounded = false

	/** draws shadow for image container */
	export let shadow = false

	/** draws border around image*/
	export let bordered = false

	$: classes = clsx({
		'rounded-full': rounded === 'full',
		'rounded-box': rounded === true,
		'shadow-lg': shadow,
		'border border-base-300': bordered,
	}, className)

</script>

<img {...$$restProps} class={classes} {src} {alt} />
