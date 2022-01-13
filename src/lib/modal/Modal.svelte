<script>
	import { fade } from 'svelte/transition'
	let className = ''
	export { className as class }

	/** control appearance of modal*/
	export let open = false

	/** align content to center*/
	export let center = false

	/** align content to end*/
	export let end = false
</script>

<div class="modal" on:click={() => open=false} class:modal-open={open}>
	<div on:click|stopPropagation class="modal-box {className}" class:text-center={center} class:text-right={end}>
		<slot/>
	</div>
</div>
