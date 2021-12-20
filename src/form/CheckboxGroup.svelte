<script>
    import Checkbox from './Checkbox.svelte'
    import FormGroup from './FormGroup.svelte'

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

    // converet array to object
    let selectedObj = selected.reduce((acc, val) => {
        return {...acc, [val]: true}
    }, {})

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

    $: {
        // convert object to array
        selected = Object.entries(selectedObj).map(params => {
            if(params[1]) {
                return params[0]
            }
            return false
        }).filter(a => a !== false)
    }
</script>

<FormGroup {inline}>
    {#each options as option}
        <Checkbox {variant} {size} bind:checked={selectedObj[getKey(option)]}>
            {getText(option)}
        </Checkbox>
    {/each}
</FormGroup>
