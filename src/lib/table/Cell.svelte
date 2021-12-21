<script>
	import { getContext } from 'svelte'

    /** @type {boolean} */
	const head = getContext('head')
</script>

{#if head}
	<th class="!whitespace-pre-wrap">
		<slot />
	</th>
{:else}
	<td class="!whitespace-pre-wrap">
		<slot />
	</td>
{/if}
