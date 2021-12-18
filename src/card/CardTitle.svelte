<script>
	let className = ''
	export { className as class }

	/**
	 * centered text
	 */
	export let center = false
</script>

<h2 class="card-title text-lg {className}" class:text-center={center}>
	<slot />
</h2>
