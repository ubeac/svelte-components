<script>
  import {Navbar} from '$lib/index.js';
  let id = "drawer-"+Math.floor(100000000 + Math.random() * 900000000)
  export let sidebarMode = "open" // open | close | mini
  export let navbarMode = "wide" // wide | tight
  export let navbarColor = "primary" // base | neutral | primary
</script>

{#if navbarMode === "wide"}
  <Navbar variant={navbarColor}>
    <svelte:fragment slot="start">
      {#if $$slots.sidebar}
        <label for={id} class="btn btn-square btn-ghost lg:inline-flex"
          class:lg:hidden={["open","mini"].includes(sidebarMode)}
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
  class:drawer-mobile={["open","mini"].includes(sidebarMode)}
  class:h-screen={navbarMode === "tight"}
  class:h-[calc(100vh-4em)]={navbarMode === "wide"}
  >
  <input id={id} type="checkbox" class="drawer-toggle"> 
  <div class="drawer-content">
    {#if navbarMode === "tight"}
      <Navbar>
        <svelte:fragment slot="start">
          {#if $$slots.sidebar}
            <label for={id} class="btn btn-square btn-ghost lg:inline-flex"
              class:lg:hidden={["open","mini"].includes(sidebarMode)}
              >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
          {/if}
          <slot name="navbar" />
        </svelte:fragment>
      </Navbar>
    {/if}
    <slot/>
  </div>
  {#if $$slots.sidebar}
    <div class="drawer-side">
      <label for={id} class="drawer-overlay"></label> 
      <div class="overflow-y-auto bg-base-200 text-base-content"
        class:w-80={sidebarMode !== "mini"}
        class:w-16={sidebarMode === "mini"}
        >
        <slot name="sidebar" />
      </div>
    </div>
  {/if}
</div>

