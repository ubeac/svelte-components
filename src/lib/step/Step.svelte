<script>
	let className = ''
	export { className as class }

	/**
	 *  variant of step
	 * @type {import('./types').Variant}
	 */
	export let variant = 'primary'

	/** icon of step (shows inside circle)*/
	export let icon = undefined
</script>

<li data-content={icon} class="step step-{variant} {className}">
	<slot />
</li>
