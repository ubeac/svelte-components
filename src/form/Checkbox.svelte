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
	 * checkbox variant
	 * @type {import('./types').Variant}
	 *  */
	export let variant = 'primary'

	/**
	 * size of checkbox
	 * @type {import('./types').Size}
	 */
	export let size = 'md'

	/** name for input tag */
	export let name
</script>

<label class="flex flex-row items-center form-control {className}">
	<input
		{disabled}
		{name}
		type="checkbox"
		bind:checked
		class="checkbox mx-2 rounded mt-1 checkbox-{variant} checkbox-{size}" />
	<slot />
</label>
