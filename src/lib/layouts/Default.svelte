<script>
  import {Navbar} from '$lib/index.js';
  import { Icon } from "$lib/index.js";
  
  import { layoutSettings } from '$lib/store.js'

  let id = "drawer-"+Math.floor(100000000 + Math.random() * 900000000)
  
</script>

{#if $layoutSettings.navbarMode === "wide"}
  <Navbar variant={$layoutSettings.navbarColor}>
    <svelte:fragment slot="start">
      {#if $$slots.sidebar}
        <label for={id} class="btn btn-square btn-ghost lg:inline-flex"
          class:lg:hidden={["open","mini"].includes($layoutSettings.sidebarMode)}
          >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      {/if}
    </svelte:fragment>
    <svelte:fragment slot="end">
      <slot name="navbar" />
    </svelte:fragment>
  </Navbar>
{/if}
<div class="drawer"
  class:drawer-mobile={["open","mini"].includes($layoutSettings.sidebarMode)}
  class:h-screen={$layoutSettings.navbarMode === "tight"}
  class:h-[calc(100vh-4em)]={$layoutSettings.navbarMode === "wide"}
  >
  <input id={id} type="checkbox" class="drawer-toggle"> 
  <div class="drawer-content">
    {#if $layoutSettings.navbarMode === "tight"}
      <Navbar>
        <svelte:fragment slot="start">
          {#if $$slots.sidebar}
            <label for={id} class="btn btn-square btn-ghost lg:inline-flex"
              class:lg:hidden={["open","mini"].includes($layoutSettings.sidebarMode)}
              >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
          {/if}
        </svelte:fragment>
        <svelte:fragment slot="end">
          <slot name="navbar" />
        </svelte:fragment>
      </Navbar>
    {/if}
    <slot/>
  </div>
  {#if $$slots.sidebar}
    <div class="drawer-side">
      <label for={id} class="drawer-overlay"></label> 
      <div class="flex flex-col overflow-y-auto bg-base-200 text-base-content"
        class:w-80={$layoutSettings.sidebarMode !== "mini"}
        class:w-16={$layoutSettings.sidebarMode === "mini"}
        >
        <slot name="sidebar" />
        <div class="flex justify-end">
          <button class="m-1 btn btn-square btn-sm btn-ghost" on:click={() => ($layoutSettings.sidebarMode == 'mini' ? $layoutSettings.sidebarMode = 'open' : $layoutSettings.sidebarMode = 'mini')}>
            {#if $layoutSettings.sidebarMode === "mini"}
              <Icon name="fas-caret-right" />
            {:else}
              <Icon name="fas-caret-left" />
            {/if}
          </button>
        </div>
      </div>
    </div>
  {/if}
</div>

