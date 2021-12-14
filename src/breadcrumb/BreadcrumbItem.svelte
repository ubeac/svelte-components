<script>
	/**
	 * set true if this entry is active
	 */
	export let active = false
</script>

<li class:text-info={active}>
	<slot name="prefix" />

	<div class="mx-2">
		<slot />
	</div>

	<slot name="suffix" />
</li>
