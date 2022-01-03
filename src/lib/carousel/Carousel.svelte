<script>
import { setContext } from "svelte";
import { element, tick } from "svelte/internal";

	let carouselEl = null;
	let items = []
	let active = 0

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

	setContext('carousel', {
		addItem: () => {
			const id = 'carousel-item' + items.length
			items = [...items, id]
			return id
		}
	})

	async function focusItem(id) {
		const element = document.getElementById('carousel-item' + id)
		if(!element) {
			return;
		}
		active = id
		
		carouselEl.scrollLeft = element.offsetLeft
	}
</script>

<div class="relative w-min h-min">

	<div
		bind:this={carouselEl}
		class="carousel {className}"
		class:carousel-center={center}
		class:carousel-end={end}
		class:carousel-vertical={vertical}>
		<slot />
	</div>
	{#if buttons}
		{#if active !== 0}
			<div on:click={() => focusItem(active-1)} class="absolute -translate-y-1/2 no-animation btn top-1/2 btn-xs btn-circle left-2">
				<slot name="prev-btn">
					&lt;
				</slot>
			</div>
		{/if}
		{#if active !== items.length -1}
			<div on:click={() => focusItem(active+1)} class="absolute -translate-y-1/2 no-animation btn top-1/2 btn-xs btn-circle right-2">	
				<slot name="next-btn">
					&gt;
				</slot>
			</div>
		{/if}
	{/if}

	{#if indicators}
		<div class="absolute w-full bottom-2 flex flex-row items-center justify-center">
			{#each items as item, i}
				<div on:click={() => focusItem(i)} class="btn btn-xs btn-circle">{i+1}</div>
			{/each}
		</div>
	{/if}
</div>
