<script>
	import { Typography } from "$lib/index.js";

	let className = ''
	export { className as class }

	/**
	 * centered text
	 */
	export let center = false
</script>

<Typography size="headline5" class="m-2 {className} {center ? 'text-center':''}">
	<slot />
</Typography>
