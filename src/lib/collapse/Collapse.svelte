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
	class="collapse pb-0 {className}"
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

	<!-- tailwind: !p-0 => !important -->
	<div class="collapse-content !p-0">
		<div class="bg-base-100 border-l border-r border-b border-base-300 p-4 w-full h-full">
			<slot />
		</div>
	</div>
</div>
