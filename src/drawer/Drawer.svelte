<script>
	let className = ''
	export { className as class }

	const close = () => (show = false)

	/**
	 * show/hide drawer
	 */
	export let show = false

	/**
	 * position of drawer
	 * @type {import('./types').Position}
	 */
	export let position = 'left'

	// temporary solution

	let positions = {
		left: 'border-r top-0 w-[400px] h-screen',
		right: 'border-l right-0 top-0 w-[400px] h-screen',
		top: 'h-[30vh] border-b left-0 right-0 top-0 -translate-y-full',
		bottom: 'h-[30vh] border-t bottom-0 left-0 right-0 ',
	}

	let showPositions = {
		left: 'left-0',
		top: 'translate-y-0',
		right: 'translate-none',
		bottom: 'translate-none',
	}

	let hidePositions = {
		left: 'left-0 -translate-x-full',
		top: 'top-0',
		right: 'translate-x-full',
		bottom: 'bottom-0 translate-y-full',
	}

	$: classes = [
		'fixed',
		'flex',
		'flex-col',
		'p-2',
		'transition-transform',
		'duration-300',
		'border-base-200',
		'bg-base-100',
		'z-[60]',
		positions[position],
		show ? showPositions[position] : hidePositions[position],
		className,
	].join(' ')
</script>

{#if show}
	<div
		on:click={close}
		class="fixed w-screen h-screen top-0 left-0 z-50 bg-black opacity-0 transition-opacity duration-300"
		class:opacity-50={show} />
{/if}
<div class={classes}>
	<div class="flex flex-row justify-between items-center mb-4">
		<span class="p-2 text-xl font-semibold">
			<slot name="title">Title</slot>
		</span>
		<div on:click={close} class="text-2xl m-4 mt-3">&times;</div>
	</div>
	<slot />
</div>
