<script>

  let className = ''
	export { className as class }

	/** center footer */
	export let center = false

</script>


<footer class="p-10 footer {className}" class:footer-center={center}>
  <slot />
</footer>

