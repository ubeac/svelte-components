<script>
  import AutoComplete from "./AutoComplete.svelte";
  import FormGroup from "./FormGroup.svelte";
  import Label from "./Label.svelte";

  let className = "";
  export { className as class };

  export let label = "";

  export let name = "";
  export let id = "";
  export let inline = false;

  export let value;
</script>

<FormGroup {name} {id} {inline} class={className}>
  <Label>{label}</Label>
  <AutoComplete {...$$restProps} bind:value let:option let:text>
    <slot {option} {text} />
  </AutoComplete>
</FormGroup>
