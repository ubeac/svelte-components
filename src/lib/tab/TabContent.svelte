<script>
	import { setContext } from 'svelte'
	import { writable } from 'svelte/store'

	let className = ''
	export { className as class }

	/**
	 * align tab header vertically
	 */
	export let vertical = false

	/**
	 * draws box around tab headers
	 */
	export let boxed = false

	/**
	 * adds lifted style to tab item (only horizontal)
	 */
	export let lifted = false

	/**
	 * adds bottom or right border for tab Item
	 */
	export let bordered = false

	/**
	 * size of tab header
	 * @type {import('./types').Size}
	 */
	export let size = 'md'

	let names = []
	let activeTab = writable()

	setContext('tabContent', {
		addNewTab: ({ name, active, disabled }) => {
			names = [...names, { name, disabled }]
			if (names.length === 1) activeTab.set(name)
			if (active) activeTab.set(name)
		},
		activeTab,
	})

	$: borderedClasses = bordered && !vertical ? 'tab-bordered' : ''
	$: liftedClasses = lifted && !vertical ? 'tab-lifted' : ''
</script>

<div class="flex {className}" class:flex-col={!vertical}>
	<div class="tabs" class:flex-col={vertical} class:tabs-boxed={boxed}>
		{#each names as { name, disabled }}
			<div
				class="tab tab-{size} {borderedClasses} {liftedClasses}"
				on:click={() => {
					if (!disabled) activeTab.set(name)
				}}
				class:tab-active={name === $activeTab}
				class:hover:text-gray-500={disabled}>
				{name}
			</div>
		{/each}
		<div class="tab {liftedClasses} {borderedClasses} flex-1" />
	</div>
	<div class="flex-1 p-4 border-b border-l border-r rounded-b-lg bg-base-100 border-base-300">
		<slot />
	</div>
</div>
