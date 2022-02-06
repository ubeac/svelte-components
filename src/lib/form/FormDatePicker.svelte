<script lang="ts">
  import DatePicker from "./DatePicker.svelte";
  import FormGroup from "./FormGroup.svelte";
  import Label from "./Label.svelte";

  let className = "";
  export { className as class };

  export let label = "";

  export let name = "";
  export let id = "";
  export let inline = false;
  export let value: Date | Date[];
</script>

<FormGroup {name} {id} {inline} class={className}>
  <Label>{label}</Label>
  <DatePicker {...$$restProps} bind:value />
</FormGroup>
