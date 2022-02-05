<script>
    import {Dropdown, Menu, MenuItem, Input} from "$lib/index.js";
    import Option from "./Option.svelte";

    /**
     * availabile options for suggestions
     * @type { any[] }
     */
	export let options = []

    /**
     * placeholder for input
     * @type { string }
     */
	export let placeholder;
	
	export let text;
	export let key;
	

    export let variant = 'primary';
    export let size;

    /**
     * fetcher function to update options based on query
     */
	export let fetch = undefined;

	export let debounce = 300;
	
	export let value = ''
    
	function debounceFn(func, wait) {
		let timeout;
		return () => {
			clearTimeout(timeout)
			timeout = setTimeout(func, wait)
		}
	} 
	
	const debouncedInputValue = debounceFn(async () => {
		if(fetch)
			options = await fetch(value)
	}, debounce)
	
	
	function getText(option) {
		return (typeof option === 'object') ? option[text] : option
	}

	function getKey(option) {
		return (typeof option === 'object') ? option[key] : option
	}

    function onSelect(option) {
        value = getText(option)
    }
	

    function handleKeyUp(event, option) {
        if(event.keyCode === 13 || event.keyCode === 32) {
            onSelect(option)
        }
    }

	$: matches = options.filter(option => {
        return getText(option)
			.toLowerCase()
			.includes(value.toLowerCase()) 
	});
	
	$: open = value !== '' && matches.length > 0

	$: {
        console.log(value) // run deboundedInputValue on each key press
        debouncedInputValue()
    }
</script>

<Dropdown>
    <Input slot="title" {variant} {size} {placeholder} bind:value />
	{#if open}
        <Menu compact class="bg-base-200 border border-base-300">
            {#each matches as option}
                <MenuItem on:keyup={(e) => handleKeyUp(e,option)} on:click={() => onSelect(option)}>
                    <slot {option} text={getText(option)}>
                        {getText(option)}
                    </slot>
                </MenuItem>
            {/each}
        </Menu>
	{/if}
</Dropdown>
