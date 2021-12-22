<script>
	let className = ''
	export { className as class }

	/**
	 * divide elements next to each other
	 */
	export let vertical = false
</script>

<div class="divider {className}" class:divider-vertical={vertical}>
	<slot />
</div>
