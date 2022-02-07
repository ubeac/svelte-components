<script lang="ts">
  import FormGroup from "./FormGroup.svelte";
  import Label from "./Label.svelte";
  import TextArea from "./TextArea.svelte";

  let className = "";
  export { className as class };

  export let label = "";

  export let name = "";
  export let id = "";
  export let inline = false;

  export let value: string;
</script>

<FormGroup {name} {id} {inline} class={className}>
  <Label>{label}</Label>
  <TextArea {...$$restProps} bind:value />
</FormGroup>
