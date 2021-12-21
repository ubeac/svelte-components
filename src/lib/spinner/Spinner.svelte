<script>
	let className = ''
	export { className as class }

	/** color of spinner
	 * @type {import('./types').Variant}
	 */
	export let variant = "primary"

	/** size of sipinner
	 * @type {import('./types').Size}
	 */
	export let size = "md"

	const sizes = {
		xs: 'w-12 h-12',
		sm: 'w-24 h-24',
		md: 'w-32 h-32',
		lg: 'w-48 h-48',
	}
</script>

<div class="{sizes[size]} rounded-full animate-spin border-b-4 border-{variant} {className}" />
