<script>
  import { getContext, onDestroy, onMount } from "svelte";

  const carousel = getContext("carousel");

  let className = "";
	
  export { className as class };

  onMount(() => carousel.add());

  onDestroy(() => carousel.remove());
</script>

<div class="carousel-item {className}">
  <slot />
</div>
