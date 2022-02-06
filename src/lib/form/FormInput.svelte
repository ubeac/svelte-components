<script>
  import FormGroup from "./FormGroup.svelte";
  import Input from "./Input.svelte";
  import Label from "./Label.svelte";

  export let label = "";

  export let name = "";
  export let id = "";
  export let inline = false;

</script>

<FormGroup {inline} {name} {id}>
  <Label>{label}</Label>
  <Input {...$$restProps} />
</FormGroup>
