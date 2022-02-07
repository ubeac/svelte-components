<script lang="ts">
  import FormGroup from "./FormGroup.svelte";
  import Input from "./Input.svelte";
  import Label from "./Label.svelte";

  let className = ''
  export {className as class}

  export let label = "";

  export let name = "";
  export let id = "";
  export let inline = false;

  export let value: string | number;
</script>

<FormGroup {inline} {name} {id} class={className}>
  <Label>{label}</Label>
  <Input {...$$restProps} bind:value />
</FormGroup>
