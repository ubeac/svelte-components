<script>
	import { setContext } from 'svelte'
	import clsx from 'clsx'

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

	/** 
	 * place elements in one line
	*/
	export let inline = false;

	setContext('form:name', name)
	setContext('form:id', id)

	$: classes = clsx(
		'form-control',
		'mr-1',
		'p-1',
		'w-full',
		inline && [
			'flex-wrap',
			'flex-row'
	 	],
		className
	)
</script>

<div class={classes}>
	<slot />
</div>
