<script>
	import Icon from "$lib/icon/Icon.svelte";
	import { createEventDispatcher } from "svelte";
	const dispatch = createEventDispatcher()


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

	export let isSubmenuOpen = false;

	function toggleSubmenu() {
		isSubmenuOpen = !isSubmenuOpen
	}

	function onClick() {
		if($$slots.submenu)
			toggleSubmenu()
		dispatch('click')
	} 
</script>

<li role="menuitem" tabindex="0" class="w-full {className}" class:bordered on:click={onClick} on:keyup>
	<a class="flex w-full gap-4" class:active {href}>
		<slot name="prefix" />
    {#if !iconOnly }
      <div class="w-full">
        <slot />
      </div>
    {/if}
    <slot name="suffix">

    {#if $$slots.submenu}
      {#if isSubmenuOpen}
        <Icon name="fas-angle-up"/>
      {:else}
        <Icon name="fas-angle-down" />
      {/if}
    {/if}
	
	  </slot>
	</a>
</li>

{#if $$slots.submenu && isSubmenuOpen}
	<slot name="submenu"/>
{/if}