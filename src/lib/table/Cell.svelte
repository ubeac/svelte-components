<script>
	import { getContext } from 'svelte'

	let className = ''
	export {className as class}

    /** @type {boolean} */
	const head = getContext('head')
</script>

{#if head}
	<th class={className}>
		<slot />
	</th>
{:else}
	<td class={className}>
		<slot />
	</td>
{/if}
