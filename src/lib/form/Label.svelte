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

<label for={id} class="ubeac-label pb-0.5 label label-text {className}">
		<slot />
</label>
