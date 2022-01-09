<script>
	let className = ''
	export { className as class }

	/** for the active tab */
	export let zebra = false

	/** make table more compact */
	export let compact = true
</script>

<div class="p-4 overflow-x-auto">
  <table class="table w-full {className}" class:table-zebra={zebra} class:table-compact={compact}>
    <thead>
      <slot name="header" />
    </thead>
    <tbody>
      <slot />
    </tbody>
  </table>
</div>