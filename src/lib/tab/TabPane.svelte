<script>
	import { getContext, onMount } from 'svelte'

	let className = ''
	export { className as class }

	let tabContent = getContext('tabContent')
	let activeTab = tabContent.activeTab

	/**
	 * title of tab
	 * @type {string}
	 */
	export let name = undefined

	/**
	 * set active tab
	 */
	export let active = false

	/**
	 * specify disabled state
	 */
	export let disabled = false

	onMount(() => {
		tabContent.addNewTab({ name, active, disabled })
	})
</script>

<div class={className} class:hidden={$activeTab !== name}>
	<slot />
</div>
