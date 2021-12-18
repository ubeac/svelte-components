<script>
	/**
	 * set true if this entry is active
	 */
	export let active = false

	/**
	 * href of breadcrumb
	 */
	export let href = undefined
</script>

<li class:text-info={active}>
	<slot name="prefix" />

	<a {href} class="mx-2">
		<slot />
	</a>

	<slot name="suffix" />
</li>
