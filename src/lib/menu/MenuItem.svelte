<script>
	let className = ''
	export { className as class }

	/**
	 * href for `a` element
	 */
	export let href = undefined
	export let iconOnly = false

	/** draw border */
	export let bordered = false
</script>

<li class="w-full {className}" class:bordered>
	<a class="flex w-full gap-2" {href}>
		<slot name="prefix" />
    {#if iconOnly !== false}
      <div class="w-full">
        <slot />
      </div>
    {/if}
		<slot name="suffix" />
	</a>
</li>
