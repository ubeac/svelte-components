<script>
	let className = ''
	export { className as class }

	/**
	 * navbar variant
	 */
	export let variant = "primary"

	/**
	 * set transparency of navbar
	 * @type {"none"|"low"|"medium"|"high"|"full"}
	 */
	export let transparency = 'none'

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

	$: positoinClasses = fixed ? 'fixed w-full' : ''
</script>

<nav
	class="navbar z-30 {variants[variant]} {transparencies[
		transparency
	]} {className} {positoinClasses}"
	class:shadow-lg={shadow}>
	<div class="navbar-start">
		<slot name="start" />
	</div>
	<div class="navbar-center">
		<slot name="center" />
	</div>
	<div class="navbar-end">
		<slot name="end" />
	</div>
</nav>
