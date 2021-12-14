<script>
	let className = ''
	export { className as class }

	/**
	 * specify size of badge
	 * @type {import('./types').Size}
	 */
	export let size = 'md'

	/**
	 * specify the type of badge
	 * @type {import('./types').Color}
	 */
	export let variant = 'primary'

	/**
	 * only draw an outline
	 */
	export let outline = false
</script>

<div class="badge badge-{size} badge-{variant} {className}" class:badge-outline={outline}>
	<slot />
</div>
