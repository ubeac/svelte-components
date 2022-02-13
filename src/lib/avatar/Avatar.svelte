<script lang="ts">
	import {getContext} from 'svelte'

	let className = ''
	export { className as class }

	/** shows a green dot as online indicator */
	export let online = false

	/** shows a gray dot as online indicator */
	export let offline = false

	/**
	 * set shape of avatar
	 * @type {"circle" | "square" | "rounded"}
	 */
	export let shape = 'circle'

	/**
	 * show this text as alt attribute of image
	 */
	export let label = undefined

	/**
	 * size of avatar
	 * @type {import('./types').Size}
	 */
	export let size = getContext('avatar:size') ?? 'md'

	/**
	 * path to an image
	 * @type {string}
	 */
	export let image = undefined

	let shapes = {
		circle: 'rounded-full',
		rounded: 'rounded-box',
		square: '',
	}

	let sizes = {
		xs: 'text-xs w-8 h-8',
		sm: 'text-sm w-10 h-10',
		md: 'text-md w-12 h-12',
		lg: 'text-lg w-16 h-16',
	}
</script>

<div
	class="ubeac-avatar avatar {sizes[size]} {className}"
	class:online
	class:offline
	class:placeholder={label && !image}>
	{#if typeof image !== 'undefined'}
		<img class="ubeac-avatar-image {shapes[shape]}" src={image} alt={label} />
	{:else if label}
		<span
			class="ubeac-avatar-text w-full h-full {shapes[
				shape
			]} bg-neutral-focus text-neutral-content text-center flex items-center justify-center">
			{label}
		</span>
	{/if}
</div>
