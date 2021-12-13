<script>
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

	$: classes = [
		rounded && rounded === 'full' ? 'rounded-full' : rounded ? 'rounded-box' : '',
		shadow ? 'shadow-lg' : '',
		bordered ? 'border border-base-300' : '',
		className,
	].join(' ')
</script>

<img class={classes} {src} {alt} />
