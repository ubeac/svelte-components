<script>
	let className = ''
	export { className as class }

	/**
	 * actions position
	 * @type { "start" | "center" | "end" }
	 */
	export let position = 'end'

	let positions = {
		start: 'justify-start',
		center: 'justify-center',
		end: 'justify-end',
	}
</script>

<div class="card-actions items-center {positions[position]} {className}">
	<slot />
</div>
