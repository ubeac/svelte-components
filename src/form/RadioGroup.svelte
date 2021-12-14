<script>
	import { createEventDispatcher, setContext } from 'svelte'
	import Radio from './Radio.svelte'
    import FormGroup from './FormGroup.svelte';

	const dispatch = createEventDispatcher()

	let className = ''
	export { className as class }

	/**
	 * color of radio
	 * @type { import('./types').Variant }
	 *  */
	export let variant = 'primary'

	/**
	 * size of radio
	 * @type {import('./types').Size}
	 */
	export let size = 'md'

	/**
	 * list of options inside radio group
	 * @type { object[] | string[] }
	 */
	export let options = []

	/**
	 * if options is array of type object, key must be a property of each option
	 */
	export let key = undefined

	/**
	 * text property of options object
	 */
	export let text = undefined

	/** value of selected radio*/
	export let value

	function valueChanged(option) {
		value = getKey(option)
		dispatch('change', value)
	}

	/**
	 * name of radio buttons group
	 */
	export let name = undefined

    /**
     * place radio buttons side by side
    */
    export let inline = false

	setContext('radio:name', name)

	function getKey(option) {
		if (typeof option === 'object' && typeof key !== 'undefined') {
			return option[key]
		}
		return option
	}

	function getText(option) {
		if (typeof option === 'object' && typeof text !== 'undefined') {
			return option[text]
		}
		return option
	}
</script>

<FormGroup {name} {inline} class={className}>
	{#each options as option}
		<Radio {variant} {size} on:change={(e) => valueChanged(option)}>{getText(option)}</Radio>
	{/each}
</FormGroup>
