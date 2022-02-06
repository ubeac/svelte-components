<script>
import { getContext } from "svelte";


	/** value of option
	 * @type {string}
	 */
	export let value

	/** selected state of option*/
	export let selected = getContext('select:value') ?? false
</script>

{#if value}
	<option {selected} {value} class="ubeac-option">
		{#if $$slots.default}
			<slot/>
		{:else}
			{value}
		{/if}
	</option>
{/if}
