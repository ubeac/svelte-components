<script>
	let className = ''
	export { className as class }

	/** make row hoverable */
	export let hover = false

	/** active row*/
	export let active = false
</script>

<tr class={className} class:active class:hover>
	<slot />
</tr>
