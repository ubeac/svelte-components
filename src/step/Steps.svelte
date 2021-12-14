<script>
	let className = ''
	export { className as class }

	/** makes steps vertical*/
	export let vertical = false
</script>

<ul class="steps {className}" class:steps-vertical={vertical}>
	<slot />
</ul>
