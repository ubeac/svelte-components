<script>
	let className = ''
	export { className as class }

	/**
	 * less padding
	 */
	export let compact = false

	/**
	 * round corners for menu
	 */
	export let rounded = false

	/**
	 * make menu horizontal
	 */
	export let horizontal = false
</script>

<ul
	class="menu bg-base-100 text-base-content shadow {className}"
	class:rounded-box={rounded}
	class:horizontal
	class:menu-compact={compact}>
	<slot />
</ul>
