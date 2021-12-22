<script>
	let className = ''
	export { className as class }

	/** align items to center*/
	export let center = false

	/** align items to end*/
	export let end = false
    
	/** align items to start*/
	export let start = true
</script>

<div
	class="mt-2 flex flex-row items-center space-x-2 {className}"
	class:justify-start={start}
	class:justify-end={end}
	class:justify-center={center}>
	<slot />
</div>
