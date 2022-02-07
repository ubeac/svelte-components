<script>
    import flatpickr from 'flatpickr'
    // import 'flatpickr/dist/themes/light.css'
    import { createEventDispatcher, onMount } from 'svelte';
    const dispatch = createEventDispatcher()


    /**
     * @type {Date|Date[]}
    */
    export let value = new Date();

    export let range = false;
    
    export let enableTime = false;

    export let variant = 'primary';

    export let size = 'md';

    export let bordered = true;

    let el;

    
    // https://stackoverflow.com/questions/19424062/load-stylesheet-at-runtime
    function loadStyle(theme) {
        // 'dark' | 'light'
        const styleElement = document.getElementById('date-picker-style');

        if(styleElement) {
            styleElement.href = "https://cdn.jsdelivr.net/npm/flatpickr/dist/themes/" + theme + ".css";

        } else {

            const lnk = document.createElement('link')

            lnk.id = 'ubeac-date-picker-style'
            lnk.type = "text/css"
            lnk.rel = "stylesheet"
            lnk.href = "https://cdn.jsdelivr.net/npm/flatpickr/dist/themes/" + theme + ".css";

            (document.head|| document.documentElement).appendChild(lnk)
        }

    }

    onMount(() => {
        loadStyle("light")
      
        flatpickr(el, {
            defaultDate: value,
            mode: range ? 'range' : 'single',
            enableTime: enableTime,
            onOpen: () => {

                const theme = document.body.parentElement.getAttribute('data-theme') ?? 'light'

                loadStyle(theme)
            },
            onChange: (option) => {
                
                if(!range) {
                    value = option[0]
                } else {
                    value = option
                }
                dispatch('change', option)
            },
        })

    })

</script>

<input {...$$restProps} class="w-full ubeac-date-picker input input-{size} input-{variant}" class:input-bordered={bordered} bind:this={el}>
