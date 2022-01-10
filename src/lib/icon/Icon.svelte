<script>
	let className = ''
	export { className as class }
	import { getIcon } from './utils'

	/** name of icon
	 * @example fas-check fab-apple far-bell, ...
	 */
	export let name = undefined

	/** icon libray name */
	export let library = 'default'

	/** size of icon
	 * @type {import('./types').Size | "xl" | "2xl" | "inherit"}
	 */
	export let size = 'md'

	let sizes = {
		'xs': 'w-2 h-2',
		'sm': 'w-4 h-4',
		'md': 'w-5 h-5',
		'lg': 'w-6 h-6',
		'xl': 'w-8 h-8',
		'2xl': 'w-10 h-10',
		'inherit': 'w-full h-full',
	}

	/** color of icon
	 * @type { import('./types').Variant | 'current' }
	 */
	export let variant = 'current'
</script>

{#await getIcon(name, library) then result}
	{#if result.ok}
		<div
			class="icon-component min-w-max min-h-max shrink-0 fill-current inline-flex items-center justify-center text-{variant} {sizes[
				size
			]} {className}">
			{@html result.svg}
		</div>
	{:else}
		<div class="shrink-0 {sizes[size]} {className}" />
	{/if}
{/await}

