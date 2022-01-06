<script>
	import { onMount } from 'svelte'
	let carouselEl = null;
	let className = ''
	export { className as class }

	/**
	 * show indicators in below of images 
	 */
	export let indicators = false


	/**
	 * next and previous buttons
	 */
	export let buttons = false;

	/**
	 * vertical carousel
	 */
	export let vertical = false

	/**
	 * snap elements to center
	 */
	export let center = false

	/**
	 * snap elements to end
	 */
	export let end = false


	let width = 0


	onMount(() => {
		width = carouselEl.children.item(0).offsetWidth
	})

	async function focusPrev() {		
		if(hasPrev) {
			carouselEl.scrollBy(-width, 0)
			carouselEl = carouselEl
		}
	}

	async function focusNext() {
		if(hasNext) {
			carouselEl.scrollBy(width, 0)
			carouselEl = carouselEl
		}

	}

	$: item_count = carouselEl?.childElementCount

	$: hasNext = carouselEl?.scrollLeft < (item_count * width - (carouselEl?.offsetWidth ?? 0))
	$: hasPrev = carouselEl?.scrollLeft > 0
</script>

<div class="relative w-min h-min">

	<div
		bind:this={carouselEl}
		class="carousel {className}"
		class:carousel-center={center}
		class:carousel-end={end}
		class:carousel-vertical={vertical}>

		<slot/>

	</div>
	{#if buttons}
		{#if hasPrev}
			<div on:click={focusPrev} class="absolute -translate-y-1/2 no-animation btn top-1/2 btn-xs btn-circle left-2">
				<slot name="prev-btn">
					&lt;
				</slot>
			</div>
		{/if}
		{#if hasNext}
			<div on:click={focusNext} class="absolute -translate-y-1/2 no-animation btn top-1/2 btn-xs btn-circle right-2">	
				<slot name="next-btn">
					&gt;
				</slot>
			</div>
		{/if}
	{/if}
<!-- 
	{#if indicators}
		<div class="absolute w-full bottom-2 flex flex-row items-center justify-center">
			{#each items as item, i}
				<div on:click={() => focusItem(i)} class="btn btn-xs btn-circle">{i+1}</div>
			{/each}
		</div>
	{/if} -->
</div>
