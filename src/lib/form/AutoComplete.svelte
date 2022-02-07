<script lang="ts">
    import {Dropdown, Menu, MenuItem, Input} from "$lib/index.js";
    import type { Size, Variant } from "$lib/types";

    let className = ''
    export {className as class}
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

    export let label = ''

	export let text;
	export let key;
	
    export let variant : Variant = 'neutral';
    export let size : Size = 'md';

    /**
     * fetcher function to update options based on query
     */
	export let fetch = undefined;

	export let debounce = 300;

    /** selected value (key) */
	export let value = ''
	
    /** value of Input component (text) */
    let inputValue = ''
    
	function debounceFn(func, wait) {
		let timeout;
		return () => {
			clearTimeout(timeout)
			timeout = setTimeout(func, wait)
		}
	} 
	
	const debouncedInputValue = debounceFn(async () => {
		if(fetch)
			options = await fetch(inputValue)
	}, debounce)
	
	
	function getText(option) {
		return (typeof option === 'object') ? option[text] : option
	}

	function getKey(option) {
		return (typeof option === 'object') ? option[key] : option
	}

    function onSelect(option) {
        inputValue = getText(option)
        value = getKey(option)
    }
	

    function handleKeyUp(event, option) {
        if(event.keyCode === 13 || event.keyCode === 32) {
            onSelect(option)
        }
    }

	$: matches = options.filter(option => {
        return getText(option)
			.toLowerCase()
			.includes(inputValue.toLowerCase()) 
	});
	
	$: open = inputValue !== '' && matches.length > 0

	$: {
        console.log(inputValue) // run deboundedInputValue on each key press
        debouncedInputValue()
    }
</script>

<Dropdown class="w-full">
    <Input slot="title" {variant} {size} {placeholder} bind:value={inputValue} class={className}/>
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
