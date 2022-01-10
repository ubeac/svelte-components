<script>
	import clsx from 'clsx'
	let className = ''
	export { className as class }

	/**
	 * navbar variant
	 * @default 'neutral'
	 */
	export let variant = 'neutral'

	/**"primary"
	 * set transparency of navbar
	 * @type {"none"|"low"|"medium"|"high"|"full"|undefined}
	 */
	export let transparency = undefined

	/**
	 * always show navbar on top
	 */
	export let fixed = false

	/**
	 * draw shadow below navbar
	 */
	export let shadow = false

	let transparencies = {
		none: 'bg-opacity-100',
		low: 'bg-opacity-75',
		medium: 'bg-opacity-50',
		high: 'bg-opacity-25',
		full: 'bg-opacity-0',
	}

	let variants = {
		base: 'bg-base-100 text-base-content',
		neutral: 'bg-neutral text-neutral-content',
		primary: 'bg-primary text-primary-content',
		secondary: 'bg-secondary text-secondary-content',
		accent: 'bg-accent text-accent-content',
		info: 'bg-info text-info-content',
		success: 'bg-success text-success-content',
		warning: 'bg-warning text-warning-content',
		error: 'bg-error text-error-content',
	}

	/**
	 * you can bind this value to a state for getting height of navbar
	 * @example <Navbar bind:clientHeight={navHeight} ...>
	 */
	export let clientHeight;

	$: classes = clsx(
		'navbar',
		'flex flex-row items-center justify-between border-b border-black border-opacity-5',
		'z-30',
		variant && `bg-${variant} text-${variant}-content`,
		fixed && 'fixed w-full',
		shadow && 'shadow-lg',
		transparency && transparencies[transparency],
		className
	)
</script>

<nav bind:clientHeight={clientHeight} class={classes}>
	<div class="flex flex-row items-center gap-2">
		<slot name="start" />
	</div>
	<div class="flex flex-row items-center gap-2">
		<slot name="center" />
	</div>
	<div class="flex flex-row items-center gap-2">
		<slot name="end" />
	</div>
</nav>
