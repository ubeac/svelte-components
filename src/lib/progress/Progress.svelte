<script>
	let className = ''
	export { className as class }


	/** current value of progress */
	export let value = 0

	/** max value of progress */
	export let max = 100

	/**
	 * progress bar variant
	 * @type {import('./types').Variant}
	 *  */
	export let variant = 'primary'
</script>

<progress {value} {max} class="progress progress-{variant} {className}">
	<slot />
</progress>
