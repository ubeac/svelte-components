<script>
    import {Alert} from '@ubeac/svelte-components'
</script>
<div class="p-4 flex flex-col">
    {#each ['info', 'success', 'error', 'warning'] as variant}
    <div class="p-2">
        <Alert open {variant}>
            <svelte:fragment slot="title">
                Alert - {variant}
            </svelte:fragment>
            This is content of alert
        </Alert>
    </div>
    {/each}
</div>