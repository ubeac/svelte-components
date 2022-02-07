<script>
	import clsx from 'clsx'
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
	export let bordered = true

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
	export let value = type === 'number' ? 0 : ''

	/**
	 * make input readonly
	 */
	export let readonly = false;

	/**
	 * specify the variant of input
	 * @type { import('./types').Variant }
	 */
	export let variant = undefined

	/**
	 * size of input
	 * @type { import('./types').Size }
	 */
	export let size = undefined

	/**
	 * placeholder of input
	 * @type {string}
	 */
	export let placeholder = ''

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

	$: classes = clsx(
		'ubeac-input',
		'input',
		'w-full',
		size && 'input-' + size,
		variant &&  'input-' + variant,
		{
			'input-bordered': bordered,
			'input-disabled': disabled,
			'shadow': shadow,
			'hover:shadow-lg': shadow
		},
		className
	)

	function onInput(e) {
		if(type === 'number') {
			value = Number(e.target.value)
		} else {
			value = e.target.value
		}
	}
</script>

<input
	{id}
	{name}
	{type}
	{...$$restProps}
	{placeholder}
	{value}
	{readonly}
	on:input={onInput}
	class={classes} />
