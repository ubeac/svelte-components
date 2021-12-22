<script>
	/** value of option
	 * @type {string}
	 */
	export let value
</script>

{#if value}
	<option {value}>
		{#if $$slots.default}
			<slot/>
		{:else}
			{value}
		{/if}
	</option>
{/if}
