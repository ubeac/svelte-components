<script>
	import clsx from 'clsx'
	import { getContext, setContext } from 'svelte'

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
	export let bordered = true

	/**
	 * specify the variant of select
	 * @type {import('../types').Variant}
	 */
	export let variant = undefined

	/**
	 * size of select
	 * @type {import('../types').Size}
	 */
	export let size = undefined

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

	$: setContext('select:value', value)

	$: classes = clsx(
		'select',
		'w-full',
		variant && 'select-' + variant,
		size && 'select-' + size,
		bordered && 'select-bordered',
		className,
	)
</script>

<select {...$$restProps} {placeholder} {disabled} {id} {name} tabindex="0" class={classes} bind:value>
	<option disabled selected value={null}>{placeholder}</option>
	<slot />
</select>
