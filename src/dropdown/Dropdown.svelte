<script>
	let className = ''
	export { className as class }

	/**
	 * position of dropdown content
	 * @type {import('./types').Position}
	 */
	export let position = 'bottom'

	/**
	 * aligns to end
	 */
	export let end = false

	/**
	 * force open dropdown
	 */
	export let open = false

	/**
	 * open dropdown with hover
	 */
	export let hover = false
</script>

<div
	class="dropdown dropdown-{position} {className}"
	class:dropdown-end={end}
	class:dropdown-open={open}
	class:dropdown-hover={hover}>
	<div tabindex="0" class="m-1 btn">
		<slot name="title" />
	</div>
	<div tabindex="0" class="w-max dropdown-content">
		<slot />
	</div>
</div>
