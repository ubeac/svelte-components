<script>

  let className = ''
	export { className as class }

	/** cols */
	export let cols = 1

	/** gap */
	export let gap = 4

</script>

<div class="grid grid-cols-1 md:grid-cols-{cols} gap-{gap} m-{gap} {className}">
  <slot/>
</div>