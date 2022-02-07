<script lang="ts">
  import FormGroup from "./FormGroup.svelte";
  import Label from "./Label.svelte";
  import Range from "./Range.svelte";

  let className = "";
  export { className as class };

  export let label = "";

  export let name = "";
  export let id = "";
  export let inline = false;

  export let max: number = 100;
  export let value: number;
</script>

<FormGroup {inline} {name} {id} class={className}>
  <Label>{label}</Label>
  <Range {...$$restProps} {max} bind:value />
</FormGroup>
