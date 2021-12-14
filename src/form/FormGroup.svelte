<script>
	import { setContext } from 'svelte'

	let className = ''
	export { className as class }

	/**
	 * name of input group
	 */
	export let name = ''

	/**
	 * id of input and for <label for={id}>
	 */
	export let id = name ?? ''

	setContext('form:name', name)
	setContext('form:id', id)
</script>

<div class="form-control p-1 w-full {className}">
	<slot />
</div>
