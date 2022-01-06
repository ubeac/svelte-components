<script>
	let className = ''
	export { className as class }
	let id;

</script>

<div {id} class="carousel-item {className}">
	<slot />
</div>
