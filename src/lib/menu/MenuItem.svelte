<script>
  import Icon from "$lib/icon/Icon.svelte";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  let className = "";
  export { className as class };

  /**
   * href for `a` element
   */
  export let href = undefined;
  export let iconOnly = false;

  /** draw border */
  export let bordered = false;

  /** set active style */
  export let active = false;

  export let hasSubmenu = $$slots.submenu;

  export let isSubmenuOpen = false;

  function toggleSubmenu() {
    isSubmenuOpen = !isSubmenuOpen;
  }

  function onClick() {
    if (hasSubmenu) toggleSubmenu();
    dispatch("click");
  }
</script>

<li
  role="menuitem"
  tabindex="0"
  class="w-full {className}"
  class:bordered
  on:click={onClick}
  on:keyup
>
  <a class="ubeac-menu-item flex w-full gap-4" class:active {href}>
    <slot name="prefix" />
    {#if !iconOnly}
      <div class="w-full">
        <slot />
      </div>
      <slot name="suffix">
        {#if hasSubmenu}
          {#if isSubmenuOpen}
            <Icon class="text-2xl" icon="la:angle-up" />
          {:else}
            <Icon class="text-2xl" icon="la:angle-down" />
          {/if}
        {/if}
      </slot>
    {/if}
  </a>
</li>

{#if hasSubmenu && isSubmenuOpen}
  <slot name="submenu" />
{/if}
