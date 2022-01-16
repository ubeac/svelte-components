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

{#if open}
	<div
		transition:fade={{ duration: 100 }}
		on:click={() => (open = false)}
		class="fixed top-0 left-0 z-30 flex items-center justify-center w-full h-full transition-all bg-black/20 " />
	<div
		class="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full"
		class:text-center={center}
		class:text-right={end}>
		<div
			class="h-[80vh] w-full md:max-w-xl xl:max-w-3xl overflow-y-scroll bg-base-100 p-4 text-base-content rounded-lg shadow-2xl {className}">
			<slot />
		</div>
	</div>
{/if}
