<script>

  let className = ''
	export { className as class }

	/** cols */
	export let cols = 1

  /** margin */
  export let margin = 0

  /** gap */
  export let gap = 2

</script>

<div class="grid grid-cols-1 md:grid-cols-{cols} gap-{gap} m-{margin} {className}">
  <slot/>
</div>