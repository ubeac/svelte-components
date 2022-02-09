<script>
  import { Icon } from "$lib/index";

  let className = "";
  export { className as class };

  /**
   * adds arrow icon
   */
  export let arrow = false;

  /**
   * adds plus/minus icon
   */
  export let plus = true;

  /**
   * force open
   */
  export let open = false;

  /**
   * force close
   */
  export let close = false;

  /**
   * open/close with click instead of focus
   */
  export let click = false;

  // close collapse if 'click' is false
  function onBlur() {
    if (click) return;
    isOpen = false;
  }

  let isOpen = false;
  let iconName = "";

  $: active = open ? true : close ? false : isOpen;

  $: {
    if (arrow) {
      iconName = active ? "la:angle-up" : "la:angle-down";
    } else if (plus) {
      iconName = active ? "la:minus" : "la:plus";
    }
  }
</script>

<div
  on:blur={onBlur}
  tabindex="0"
  class="ubeac-collapse flex flex-col border border-base-300"
>
  <div
    class="ubeac-collapse-title px-4 py-2 bg-base-100 flex flex-row items-center justify-between transition typography-headline6"
    class:bg-base-200={active}
    on:click={() => (isOpen = !isOpen)}
  >
    <slot name="title" />
    {#if iconName}
      <Icon icon={iconName} />
    {/if}
  </div>
  <div
    class="ubeac-collapse-content bg-base-100 px-4 border-base-300 max-h-0 typography-body1 transition-all overflow-hidden"
    class:!max-h-min={active}
    class:border-t={active}
    class:py-4={active}
  >
    <slot />
  </div>
</div>
