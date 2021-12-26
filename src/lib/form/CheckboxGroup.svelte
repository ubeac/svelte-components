<script>
    import clsx from 'clsx';

    import FormGroup from './FormGroup.svelte'
    
    let className = ""
    export {className as class}
    /**
     * list of options to select
     * @type {Array}
     */
    export let options = []

    /**
     * list of selected optoins
     * @type {Array}
     */
    export let selected = []


    /**
     * name of input
     */
    export let name = '';

    /**
     * inline prop for FormGroup
    */
    export let inline = false

    /**
     * variant of checkboxes
     */
    export let variant = undefined

    /**
     * size of checkboxes
     */
    export let size = undefined

    /**
     * text of checkbox option
     */
    export let text = undefined

    /**
     * key of checkbox option
     */
    export let key = undefined

    function getText(option) {
        if(typeof option=== 'object' && typeof text !== 'undefined') {
            return option[text]
        }
        return option
    }


    function getKey(option) {
        if(typeof option=== 'object' && typeof key !== 'undefined') {
            return option[key]
        }
        return option
    }

    function change(option) {
        const key = getKey(option)
        if(selected.includes(key)) {
            selected = selected.filter(i => i !== key)
        } else {
            selected = [...selected, key]
        }
    }

    $: classes = clsx(
        "checkbox",
        "mx-2",
        "rounded",
        "my-1",
        variant && "checkbox-" + variant,
        size && "checkbox-" + size,
        className
    )
</script>

<FormGroup {inline}>
    {#each options as option}
        <label class="flex flex-row items-center form-control">
            <input {name} bind:group={selected} type="checkbox" value={getKey(option)} class={classes} />
            {getText(option)}
        </label>
    {/each}
</FormGroup>
