<script>
	let className = ''
	export { className as class }

	/**
	 * adds arrow icon
	 */
	export let arrow = false

	/**
	 * adds plus/minus icon
	 */
	export let plus = false

	/**
	 * force open
	 */
	export let open = false

	/**
	 * force close
	 */
	export let close = false

	/**
	 * open/close with click instead of focus
	*/
	export let click = false
</script>

<div
	tabindex="0"
	class="collapse {className}"
	class:collapse-open={open}
	class:collapse-close={close}
	class:collapse-plus={plus}
	class:collapse-arrow={arrow}>
	{#if click}
		<input type="checkbox" />
	{/if}
	<div class="border collapse-title">
		<slot name="title" />
	</div>

	<div class="collapse-content">
		<slot />
	</div>
</div>
