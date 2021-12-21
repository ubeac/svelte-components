<script>
	let className = ''
	export { className as class }

	// TODO: add next and prev button
	// TODO: add slide indicator ...

	/**
	 * vertical carousel
	 */
	export let vertical = false

	/**
	 * snap elements to center
	 */
	export let center = false

	/**
	 * snap elements to end
	 */
	export let end = false
</script>

<div
	class="carousel {className}"
	class:carousel-center={center}
	class:carousel-end={end}
	class:carousel-vertical={vertical}>
	<slot />
</div>
