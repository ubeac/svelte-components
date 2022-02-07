<script>
  import clsx from "clsx";
	import { getContext } from "svelte";

	let className = ''
	export { className as class }

	/** specify checked state*/
	export let checked = false

	/**
	 * specify disabled state
	 */
	export let disabled = false

	/**
	 * checkbox variant
	 * @type {import('./types').Variant}
	 *  */
	export let variant = undefined

	/**
	 * size of checkbox
	 * @type {import('./types').Size}
	 */
	export let size = undefined

	/** name for input tag */
	export let name = getContext('form:name') ?? ''

	$: classes = clsx(
		"ubeac-checkbox-input",
		"checkbox",
		"mx-2",
		"rounded",
		"my-1",
		variant && "checkbox-" + variant,
		size && "checkbox-" + size,
		className
	);
</script>

<label class="ubeac-checkbox-label flex flex-row items-center form-control">
  <input {...$$restProps} {disabled} {name} on:change type="checkbox" bind:checked class={classes} />
  <slot />
</label>
