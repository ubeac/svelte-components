<script>
	let className = ''
	export { className as class }

	/** tooltip text
	 * @type {string}
	 */
	export let text = ''

	/**
	 * control tooltip open/close state
	 */
	export let open = false

	/** position of tooltip
	 * @type {import('./types').Position}
	 */
	export let position = 'top'

	/** variant of tooltip
	 * @type {import('./types').Variant}
	 */
	export let variant = 'primary'
</script>

<div
	data-tip={text}
	class="tooltip tooltip-{position} tooltip-{variant} {className}"
	class:tooltip-open={open}>
	<slot />
</div>
