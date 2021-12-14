<script>
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
	export let variant = 'primary'

	/**
	 * size of toggle
	 * @type {import('./types').Size}
	 */
	export let size = 'md'

	/** name for input tag */
	export let name
</script>

<label class="flex flex-row items-center form-control">
	<input
		{disabled}
		{name}
		type="checkbox"
		bind:checked
		class="toggle mx-2  mt-1 toggle-{variant} toggle-{size} {className}" />
	<slot />
</label>
