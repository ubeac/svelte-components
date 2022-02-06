<script>
	import { getContext } from 'svelte'
	import clsx from 'clsx'

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
	export let bordered = true

	/** content of textarea
	 * @type {string}
	 */
	export let value

	/**
	 * specify the color of textarea
	 * @type {import('./types').Variant}
	 */
	export let variant = undefined

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
	
	$: classes = clsx(
		'ubeac-textarea',
		'textarea',
		'w-full',
		variant && 'textarea-' + variant,
		bordered && 'textarea-bordered',
		className,
	)
</script>

<textarea {id} {...$$restProps} bind:value {disabled} class={classes}/>
