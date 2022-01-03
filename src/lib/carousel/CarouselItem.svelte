<script>
import { getContext, onMount } from "svelte";

	const carousel = getContext('carousel')

	let className = ''
	export { className as class }
	let id;

	onMount(() => {
		id = carousel.addItem()
	})
</script>

<div {id} class="flex flex-none {className}">
	<slot />
</div>
