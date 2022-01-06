<script>
	import { onMount, setContext } from 'svelte'
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


	let item_count = 0
	let width = 0

	setContext('carousel', {
		addItem: () => {
			item_count =item_count + 1
			if(width === 0) {
				width = carouselEl.children.item(0).offsetWidth;
			}
		},
		removeItem: () => item_count = item_count - 1
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
			console.log(carouselEl.scrollLeft, width, item_count, carouselEl.offsetWidth)
		}

	}

	$: console.log(item_count, width)
	$: hasNext = carouselEl?.scrollLeft <= (item_count * width) - carouselEl?.offsetWidth - 10
	$: console.log({hasNext}, carouselEl?.scrollLeft, item_count, width, carouselEl?.offsetWidth)
	$: hasPrev = carouselEl?.scrollLeft > 10
	$: console.log({hasPrev}, carouselEl?.scrollLeft, item_count, width)
</script>

<div class="relative w-full h-full {className}">

	<div
		bind:this={carouselEl}
		class="carousel w-full h-full"
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
