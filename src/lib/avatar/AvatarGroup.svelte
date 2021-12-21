<script>
	import {setContext} from 'svelte'


	let className = ''
	export { className as class }

	/**
	 * size of each avatar item
	 */
	export let size = 'md'

	setContext('avatar:size', size)
</script>

<div class="-space-x-4 avatar-group {className}" class:-space-x-2={size === 'xs'}>
	<slot />
</div>
