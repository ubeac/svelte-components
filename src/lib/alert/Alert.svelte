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
		<div class="flex w-full">
			<div class="flex items-center justify-center mr-4 text-center">
				<slot name="icon">
                    <!-- TODO: add default icon -->
					<!-- <Icon size="sm" name={defaults.states[state].icon} /> -->
				</slot>
			</div>
			<div class="flex flex-col flex-1">
				<div class="font-semibold">
					<slot class="font-semibold" name="title" />
				</div>
				<slot />
			</div>
			<slot name="action">
        <button class="btn btn-xs btn-ghost btn-circle" on:click={() => (open = !open)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-4 h-4 stroke-current">   
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>                       
          </svg>
        </button>
			</slot>
		</div>
	</div>
{/if}
