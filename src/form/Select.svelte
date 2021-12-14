<script>
	import { getContext } from 'svelte'

	let className = ''
	export { className as class }

	/**
	 * placeholder for select
	 */
	export let placeholder = 'select'

	/**
	 * control disabled state of select
	 */
	export let disabled = false

	/**
	 * draws border around select
	 */
	export let bordered = false

	/**
	 * specify the variant of select
	 * @type {import('./types').Variant}
	 */
	export let variant = 'primary'

	/**
	 * size of select
	 * @type {import('./types').Size}
	 */
	export let size = 'md'

	/**
	 * selected item
	 */
	export let value

	/**
	 * name of select input
	 * @type {string}
	 */

	export let name = getContext('form:name') ?? ''

	/**
	 * id of select
	 * @type {string}
	 * */
	export let id = getContext('form:id') ?? name
</script>

<select
	bind:value
	{disabled}
	tabindex="0"
	{id}
	{name}
	class="select select-{variant} select-{size} {className}"
	class:select-bordered={bordered}>
	<option disabled selected>{placeholder}</option>
	<slot />
</select>
