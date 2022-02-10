<script>
	import { getContext } from 'svelte'

	let className = ''
	export {className as class}

    /** @type {boolean} */
	const head = getContext('head')
</script>

{#if head}
	<th class="ubeac-table-cell ubeac-table-header-cell {className}">
		<slot />
	</th>
{:else}
	<td class="ubeac-table-cell ubeac-table-body-cell {className}">
		<slot />
	</td>
{/if}
