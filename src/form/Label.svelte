<script>
	import { getContext } from 'svelte'

	let className = ''
	export { className as class }

	/**
	 * name or id of an input
	 * @type {string}
	 */
	export let id = getContext('form:id') ?? ''
</script>

<label for={id} class="label pb-0.5 {className}">
	<span class="label-text font-bold">
		<slot />
	</span>
</label>
