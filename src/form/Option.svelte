<script>
	/** value of option
	 * @type {string}
	 */
	export let value
</script>

{#if value}
	<option {value}>
		{value}
	</option>
{/if}
