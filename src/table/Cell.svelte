<script>
	import { getContext } from 'svelte'

    /** @type {boolean} */
	const head = getContext('head')
</script>

{#if head}
	<th>
		<slot />
	</th>
{:else}
	<td>
		<slot />
	</td>
{/if}
