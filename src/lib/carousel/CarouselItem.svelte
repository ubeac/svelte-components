<script>
import { getContext, onDestroy, onMount } from "svelte";

	const carousel = getContext('carousel')

	let className = ''
	export { className as class }
	let id;

	onMount(() =>{
		carousel.addItem()
	})

	onDestroy(() => {
		carousel.removeItem()
	})

</script>

<div {id} class="carousel-item {className}">
	<slot />
</div>
