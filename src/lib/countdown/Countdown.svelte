<script>
	let className = ''
	export { className as class }

	/**
	 * value of countdown
	 * @type {number}
	 */
	export let value = 0
</script>

<div class="countdown {className}">
	<span style="--value: {value}" />
</div>
