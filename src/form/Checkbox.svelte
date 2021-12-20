<script>
  import clsx from "clsx";

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
	export let name

	$: classes = clsx(
		"checkbox",
		"mx-2",
		"rounded",
		"my-1",
		variant && "checkbox-" + variant,
		size && "checkbox-" + size,
		className
	);
</script>

<label class="flex flex-row items-center form-control">
  <input {disabled} {name} type="checkbox" bind:checked class={classes} />
  <slot />
</label>
