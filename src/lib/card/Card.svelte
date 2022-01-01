<script>
	let className = ''
	export { className as class }

	/**
	 * show image in one side
	 */
	export let side = false

	let full = false

	/**
	 * adds border
	 */
	export let bordered = true

	/**
	 * less padding
	 */
	export let compact = false

	/**
	 * @type {"top"|"bottom"|"side"|"full"}
	 */
	export let position = 'top'

	/**
	 * draw shadow for card
	 * @type {boolean | 'none' | import('./types').Size}
	 */
	export let shadow = false

	// image-full and card-side classes are based on position prop
	$: {
		if (position === 'side') {
			side = true
			full = false
		} else if (position === 'full') {
			side = false
			full = true
		} else {
			side = false
			full = false
		}
	}

	const shadows = {
		none: '',
		xs: 'shadow-sm',
		sm: 'shadow-md',
		md: 'shadow-lg',
		lg: 'shadow-xl',
	}

	$: {
		if (shadow === true) {
			shadow = 'sm'
		} else if (shadow === false) {
			shadow = 'none'
		}
	}

</script>

<div
	class="card {shadows[shadow]} {bordered
		? 'border border-gray-500 border-opacity-20'
		: ''} {className}"
	class:image-full={full}
	class:card-side={side}
	class:compact>
	{#if position !== 'bottom'}
		<slot name="image" />
	{/if}

	<div class="card-body">
		<slot name="title" />
		<div class="flex-1">
			<slot />
		</div>
		<slot name="actions" />
	</div>

	{#if position === 'bottom'}
		<slot name="image" />
	{/if}
</div>
