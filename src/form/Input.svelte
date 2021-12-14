<script>
	import { getContext } from 'svelte'

	let className = ''
	export { className as class }

	/**
	 * specify disabled state
	 */
	export let disabled = false

	/**
	 * draw border around input
	 */
	export let bordered = false

	/**
	 * draw shadow around input
	 */
	export let shadow = false

	/**
	 * type of input
	 * TODO: list all available types
	 * @type { "text" | "email" | "password" | "number" | string }
	 */
	export let type = 'text'

	/**
	 * value of input
	 */
	export let value = undefined

	/**
	 * specify the variant of input
	 * @type { import('./types').Variant }
	 */
	export let variant = 'primary'

	/**
	 * size of input
	 * @type { import('./types').Size }
	 */
	export let size = "md"

	/**
	 * placeholder of input
	 * @type {string}
	 */
	export let placeholder

	/**
	 * name of input
	 * @type {string}
	 */
	export let name = getContext('form:name') ?? ''

	/**
	 * id of input
	 * @type {string}
	 */
	export let id = getContext('form:id') ?? ''
</script>

<input
	{id}
	{name}
	{type}
	{disabled}
	{placeholder}
	on:change={(e) => (value = /* TODO: use bind value */ e.target.value)}
	class="input w-full input-{size} input-{variant} {className}"
	class:input-bordered={bordered}
	class:input-disabled={disabled}
	class:shadow
	class:hover:shadow-lg={shadow} />
