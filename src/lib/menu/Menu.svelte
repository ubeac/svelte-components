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

  /**
   * draw shadow for menu
   * @type {boolean | 'none' | import('./types').Size}
   */
  export let shadow = false
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

<ul
	class="ubeac-menu menu overflow-visible bg-base-200 {shadows[shadow]} {className}"
	class:rounded-box={rounded}
	class:horizontal
	class:compact={compact}
	role="menu">
	<slot />
</ul>
