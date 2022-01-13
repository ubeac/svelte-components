<script>
	let className = ''
	export { className as class }
</script>

<li class="menu-title {className}">
	<span class="text-current">
		<slot />
	</span>
</li>
