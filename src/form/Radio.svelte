<script>
	import { getContext } from 'svelte'

	let className = ''
	export { className as class }

	/**
	 * color of radio
	 * @type {import('./types').Variant}
	 *  */
	export let variant = 'primary'

	/**
	 * size of radio
	 * @type {import('./types').Size}
	 */
	export let size = 'md'

	/** specify disabled state*/
	export let disabled = false

	/**
	 * @type {string}
	 */
	const name = getContext('radio:name')

	$: classes = [
		'radio',
		'm-2',
		'mt-1',
		size ? 'radio-' + size : '',
		variant ? 'radio-' + variant : '',
		className,
	].join(' ')
</script>

<label class="flex flex-row items-center form-control">
	<input {disabled} type="radio" {name} class={classes} on:change />
	<slot />
</label>
