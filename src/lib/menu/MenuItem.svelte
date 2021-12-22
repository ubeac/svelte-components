<script>
	let className = ''
	export { className as class }

	/**
	 * href for `a` element
	 */
	export let href = undefined

	/** draw border */
	export let bordered = false
</script>

<li class="w-full {className}" class:bordered>
	<a class="flex gap-2 w-full" {href}>
		<slot name="prefix" />
		<div class="w-full">
			<slot />
		</div>
		<slot name="suffix" />
	</a>
</li>
