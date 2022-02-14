<script>
  import { Icon } from "$lib/index.js";

  import { fade } from "svelte/transition";
  // import defaults from './default'
  // import Icon from './Icon.svelte'

  let className = "";
  export { className as class };

  /**
   * variany of alert
   * @type { import('../types').Variant }
   */
  export let variant = "info";

  /**
   * set `true` if alert is open
   * @type {boolean}
   */
  export let open = true;
</script>

{#if open}
  <div
    transition:fade={{ duration: 100 }}
    class="ubeac-alert alert alert-{variant} flex w-full {className}"
  >
    <div
      class="ubeac-alert-icon flex items-center justify-center mr-4 text-center"
    >
      <slot name="icon">
        <Icon class="text-2xl" icon="fa-solid:info" />
      </slot>
    </div>
    <div class="ubeac-alert-content flex flex-col flex-1 typography-body1">
      <slot class="font-semibold" name="title" />
      <slot />
    </div>
    <slot name="action">
      <button
        class="ubeac-alert-close-btn btn btn-xs btn-ghost btn-circle"
        on:click={() => (open = !open)}
      >
        <Icon icon="fa-solid:times" />
      </button>
    </slot>
  </div>
{/if}
