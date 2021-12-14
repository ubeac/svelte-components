<script>
	import { setContext } from 'svelte'

	let className = ''
	export { className as class }

	setContext('head', true)
</script>

<tr class={className}>
	<slot />
</tr>
