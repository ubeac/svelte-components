<script>
	import { getContext } from 'svelte'

	let className = ''
	export { className as class }

	//  TODO: complete This componenet

	/**
	 * control disabled state of textarea
	 */
	export let disabled = false

	/**
	 * draws border around textarea
	 */
	export let bordered = false

	/** content of textarea
	 * @type {string}
	 */
	export let value

	/**
	 * specify the color of textarea
	 * @type {import('./types').Variant}
	 */
	export let variant = 'primary'

	/**
	 * name of input
	 * @type {string}
	 */
	 export let name = getContext('name') ?? ''

	/**
	 * id of input
	 * @type {string}
	 */
	 export let id = getContext('id') ?? name
	
</script>

<textarea
	{id}
	{name}
	bind:value
	{disabled}
	class="textarea w-full textarea-{variant} {className}"
	class:textarea-bordered={bordered} />
