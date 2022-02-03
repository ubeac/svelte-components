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

	/** set active style */
	export let active = false
</script>

<li role="menuitem" tabindex="0" class="w-full {className}" class:bordered on:click on:keyup>
	<a class="flex w-full gap-4" class:active {href}>
		<slot name="prefix" />
    {#if !iconOnly }
      <div class="w-full">
        <slot />
      </div>
    {/if}
		<slot name="suffix" />
	</a>
</li>
