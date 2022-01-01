<script>
	/** value of option
	 * @type {string}
	 */
	export let value

	/** selected state of option*/
	export let selected = false
</script>

{#if value}
	<option {selected} {value}>
		{#if $$slots.default}
			<slot/>
		{:else}
			{value}
		{/if}
	</option>
{/if}
