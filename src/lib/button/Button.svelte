<script>
import { Typography } from '$lib/index.js';

	import { getContext } from 'svelte'

	let className = ''
	export { className as class }

	/**
	 * transparent button with colored border
	 */
	export let outline = false

	/**
	 * specify type or color of button
	 * @type { import('./types').Variant | "link" }
	 */
	export let variant = getContext('button:variant') ?? 'primary'
	/**
	 * @type { import('./types').Size }
	 */
	export let size = getContext('button:size') ?? 'md'

	/**
	 * adds more horizontal padding
	 */
	export let wide = false

	/** button with full width */
	export let block = false

	/** rounded corners */
	export let circle = false

	/** make button square */
	export let square = false

	/** force button to show active state */
	export let active = false

	/** force button to show disabled state */
	export let disabled = false

	/** button with glass effect */
	export let glass = false

	/** show loading spinner */
	export let loading = false

	/** disables click animation */
	export let noAnimation = false

	/** no padding */
	export let compact = false
</script>

<button
	{...$$restProps}
	class="btn btn-{variant} btn-{size} typography-button {className}"
	class:btn-circle={circle}
	class:btn-square={square}
	class:btn-outline={outline}
	class:no-animation={noAnimation}
	class:btn-active={active}
	class:btn-disabled={disabled}
	class:btn-wide={wide}
	class:btn-block={block}
	class:glass
	class:loading
	class:p-0={compact}
	on:click>
	<slot name="prefix" />
	<slot />
	<slot name="suffix" />
</button>
