<script>
  import { browser } from "$app/env";
  import { onMount } from "svelte"

  import {Navbar} from '$lib/index.js';
  import { Icon } from "$lib/index.js";

  let id = "drawer-"+Math.floor(100000000 + Math.random() * 900000000)
  
  let currentTheme = "dark"
  const setTheme = (theme) => {
    localStorage.setItem("theme", theme)
    document.documentElement.setAttribute("data-theme", theme)
    currentTheme = theme
  }
  const loadThemeIfExists = () => {
    if (localStorage.getItem("theme")) {
      setTheme(localStorage.getItem("theme"))
    }
  }

  onMount(() => {
    loadThemeIfExists()
  })

  export let title=""
  export let themeButton = true;
  
  export let sidebarMode = 'open'  // open | close | mini
  export let navbarMode = 'wide'  // wide | tight
  export let navbarColor = 'neutral'  // base | neutral | primary
  export let sidebarColor = 'base'  // base | neutral | primary

</script>

<div class="bg-base-200 text-base-content">
  {#if navbarMode === "wide"}
    <Navbar variant={navbarColor}>
      
      <svelte:fragment slot="start">
        {#if $$slots.sidebar}
          <label for={id} class="btn btn-square btn-sm btn-ghost lg:inline-flex"
            class:lg:hidden={["open","mini"].includes(sidebarMode)}
            >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </label>
        {/if}
        <slot name="navbar-start" />
      </svelte:fragment>
      
      <svelte:fragment slot="end">
        {#if browser && themeButton}
          {#if currentTheme == "light"}
            <button class="btn btn-ghost btn-sm btn-square" on:click={() => setTheme("dark")}>
              <Icon class="text-2xl" icon="la:sun" />
            </button>
          {:else if currentTheme == "dark"}
            <button class="btn btn-ghost btn-sm btn-square" on:click={() => setTheme("light")}>
              <Icon class="text-2xl" icon="la:moon" />
            </button>
          {/if}
        {/if}

        <slot name="navbar-end" />

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
        <Navbar variant={navbarColor}>
          <svelte:fragment slot="start">
            {#if $$slots.sidebar}
              <label for={id} class="btn btn-square btn-ghost lg:inline-flex"
                class:lg:hidden={["open","mini"].includes(sidebarMode)}
                >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </label>
            {/if}
            <slot name="navbar-start" />
          </svelte:fragment>
          <svelte:fragment slot="end">

            {#if browser && themeButton}
              {#if currentTheme == "light"}
                <button class="btn btn-ghost btn-sm btn-square" on:click={() => setTheme("dark")}>
                  <Icon class="text-2xl" icon="fas-sun" />
                </button>
              {:else if currentTheme == "dark"}
                <button class="btn btn-ghost btn-sm btn-square" on:click={() => setTheme("light")}>
                  <Icon class="text-2xl" icon="fas-moon" />
                </button>
              {/if}
            {/if}
            
          </svelte:fragment>
        </Navbar>
      {/if}

      {#if $$slots.breadcrumbs}
        <div class="text-xs border-b border-base-content border-opacity-10">
          <slot name="breadcrumbs" />
        </div>
      {/if}
      
      <slot/>
    </div>
    {#if $$slots.sidebar}
      <div class="drawer-side"
      >
        <label for={id} class="drawer-overlay"></label> 
        <div class="flex flex-col overflow-y-visible border-r border-black border-opacity-5"
          class:w-60={sidebarMode !== "mini"}
          class:w-16={sidebarMode === "mini"}

          class:bg-base-100={sidebarColor === "base"}
          class:text-base-content={sidebarColor === "base"}
          class:bg-neutral={sidebarColor === "neutral"}
          class:text-neutral-content={sidebarColor === "neutral"}
          class:bg-primary={sidebarColor === "primary"}
          class:text-primary-content={sidebarColor === "primary"}

          >
          <slot name="sidebar" />
          <div class="flex justify-end">
            <button class="m-1 btn btn-square btn-sm btn-ghost" on:click={() => (sidebarMode == 'mini' ? sidebarMode = 'open' : sidebarMode = 'mini')}>
              {#if sidebarMode === "mini"}
                <Icon class="text-2xl" icon="la:caret-right" />
              {:else}
                <Icon class="text-2xl" icon="la:caret-left" />
              {/if}
            </button>
          </div>
        </div>
      </div>
    {/if}
  </div>

</div>