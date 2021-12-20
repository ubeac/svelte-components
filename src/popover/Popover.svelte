<!-- TODO -->
<script>
	import { createPopper } from '@popperjs/core'
	import { onMount } from 'svelte'

	let className = ''
	export { className as class }

	let isOpen = false
	/**
	 * open state of popper
	 */
	export { isOpen as open }

	let popper = null

	let content
	let targetElement

	/**
	 * id of target element
	 * @type {string}
	 */
	export let target

	/**
	 * open popper on hover
	 */
	export let hover = false

	/**
	 * open popper on focus
	 */
	export let focus = false

	/**
	 * Placement of popper
	 * @type {import('./types').Position}
	 */
	export let placement = 'bottom'

	const toggle = () => (isOpen = !isOpen)
	const open = () => (isOpen = true)
	const close = () => (isOpen = false)

	onMount(() => {
		targetElement = document.getElementById(target)
		if (targetElement) {
			if (hover) {
				targetElement.addEventListener('mouseenter', open)
				targetElement.addEventListener('mouseleave', close)
			} else if (focus) {
				targetElement.addEventListener('focus', open)
				targetElement.addEventListener('blur', close)
			} else {
				targetElement.addEventListener('click', toggle)
			}
		} else {
            throw new Error('popover needs a target element!')
        }

		return () => {
			if (targetElement) {
				if (hover) {
					targetElement.removeEventListener('mouseenter', open)
					targetElement.removeEventListener('mouseleave', close)
				} else if (focus) {
					targetElement.removeEventListener('focus', open)
					targetElement.removeEventListener('blur', close)
				} else {
					targetElement.removeEventListener('click', toggle)
				}
			}
		}
	})

	$: {
		if (isOpen && content) {
			popper = createPopper(targetElement, content, {
				placement,
				modifiers: [
					{
						name: 'offset',
						options: {
							offset: [0, 8],
						},
					},
				],
			})
		} else if (popper) {
			popper.destroy()
			popper = undefined
		}
	}
</script>

{#if isOpen}
	<span
		data-show={isOpen}
		role="tooltip"
		class="bg-base-200 border border-opacity-50 border-base-300 rounded p-1 {className}"
		bind:this={content}>
		<div data-popper-arrow class="arrow" />
		{#if $$slots['title']}
			<span class="w-full bg-base-300 font-bold py-2 px-8">
				<slot name="title" />
			</span>
		{/if}
		<span>
			<slot />
		</span>
	</span>
{/if}

<style>
	.arrow,
	.arrow::before {
		position: absolute;
		width: 8px;
		height: 8px;
		z-index: -1;
	}

	.arrow::before {
		content: '';
		transform: rotate(45deg);
		background-color: var(--b2);
	}

	:global(span[data-popper-placement^='bottom'] > .arrow) {
		top: -4px;
	}

	:global(span[data-popper-placement^='top'] > .arrow) {
		bottom: -4px;
	}

	:global(span[data-popper-placement^='left'] > .arrow) {
		right: -4px;
	}

	:global(span[data-popper-placement^='right'] > .arrow) {
		left: -4px;
	}
</style>
