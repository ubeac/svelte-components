<script>
  import { setContext } from "svelte";

  let className = "";

  export { className as class };

  /**
   * show indicators in below of images
   */
  export let indicators = false;

  /**
   * next and previous buttons
   */
  export let buttons = false;

  /**
   * vertical carousel
   */
  export let vertical = false;

  /**
   * snap elements to center
   */
  export let center = false;

  /**
   * snap elements to end
   */
  export let end = false;

  let ref = null;
  let total = 0;
  let index = -1;

  setContext("carousel", {
    add: () => {
      total = ref?.children.length;
      if (index == -1) index = 0;
    },
    remove: () => {
      total = ref?.children.length - 1;
      if (index >= total) index = total - 1;
    },
  });

  async function prev(event) {
    event.preventDefault();
    if (!hasPrev) return;
    index--;
  }

  async function next(event) {
    event.preventDefault();
    if (!hasNext) return;
    index++;
  }

  $: hasPrev = total > 1 && index > 0;
  $: hasNext = total > 1 && index < total - 1;

  $: left = ref?.children.item(index)?.offsetLeft;
  $: ref?.scrollTo(left, 0);
</script>

<div class="relative w-full h-full {className}">
  <div
    bind:this={ref}
    class="carousel w-full h-full"
    class:carousel-center={center}
    class:carousel-end={end}
    class:carousel-vertical={vertical}
  >
    <slot />
  </div>
  {#if buttons}
    {#if hasPrev}
      <div
        on:click={prev}
        class="absolute -translate-y-1/2 no-animation btn top-1/2 btn-xs btn-circle left-2"
      >
        <slot name="prev-btn">&lt;</slot>
      </div>
    {/if}
    {#if hasNext}
      <div
        on:click={next}
        class="absolute -translate-y-1/2 no-animation btn top-1/2 btn-xs btn-circle right-2"
      >
        <slot name="next-btn">&gt;</slot>
      </div>
    {/if}
  {/if}
  
	{#if indicators}
		<div class="absolute w-full bottom-2 flex flex-row items-center justify-center">
			{#each Array.from({length: total}).fill(0) as  _, i}
				<div on:click={() => index = i} class="btn btn-xs btn-circle">{i+1}</div>
			{/each}
		</div>
	{/if} 

</div>
