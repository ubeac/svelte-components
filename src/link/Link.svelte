<script>
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
	export let variant = 'primary'
</script>

<a on:click {href} class="link link-{variant} {className}" class:link-hover={hover}>
	<slot />
</a>
