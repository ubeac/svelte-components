<script>
	import { fade } from 'svelte/transition'
	// import defaults from './default'
	// import Icon from './Icon.svelte'

	let className = ''
	export { className as class }

	/**
	 * variany of alert
	 * @type { import('./types').Variant }
	 */
	export let variant = 'info'

	/**
	 * set `true` if alert is open
	 * @type {boolean}
	 */
	export let open = true

</script>

{#if open}
	<div transition:fade={{ duration: 100 }} class="alert alert-{variant} {className}">
		<div class="w-full flex">
			<div class="mr-4 flex items-center justify-center text-center">
				<slot name="icon">
                    <!-- TODO: add default icon -->
					<!-- <Icon size="sm" name={defaults.states[state].icon} /> -->
				</slot>
			</div>
			<div class="flex-1 flex flex-col">
				<div class="font-semibold">
					<slot class="font-semibold" name="title" />
				</div>
				<slot />
			</div>
			<slot name="action">
				<div
					class="w-5 h-5 flex items-center justify-center text-center rounded-full text-white bg-black bg-opacity-20 hover:bg-opacity-30"
					on:click={() => (open = !open)}>
					&times;
				</div>
			</slot>
		</div>
	</div>
{/if}
