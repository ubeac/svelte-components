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
		class="fixed w-full h-full z-30 left-0 top-0 bg-black/20 transition-all flex items-center justify-center " />
	<div
		class="fixed w-full h-full items-center justify-center top-0 left-0 flex z-50"
		class:text-center={center}
		class:text-right={end}>
		<div
			class="z-[100] w-10/12 sm:w-8/12 md:w-6/12 lg:w-4/12 h-[90%] overflow-y-scroll bg-base-300 p-4 text-base-content rounded-lg shadow-2xl {className}">
			<slot />
		</div>
	</div>
{/if}
