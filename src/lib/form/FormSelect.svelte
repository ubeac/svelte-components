<script lang="ts">
  import type { Size, Variant } from "$lib/types";

  import FormGroup from "./FormGroup.svelte";
  import Label from "./Label.svelte";
  import Option from "./Option.svelte";
  import Select from "./Select.svelte";

  let className = "";
  export { className as class };

  export let label = "";

  export let options: Array<string> = [];
  export let variant: Variant = "neutral";
  export let size: Size = "md";
  export let value: string;
  export let placeholder: string;

  export let id: string = "";
  export let name: string = "";
  export let inline: boolean = false;
</script>

<FormGroup {id} {name} {inline} class={className}>
  <Label>{label}</Label>
  <Select {...$$restProps} {placeholder} {size} {variant} bind:value>
    {#each options as option}
      <Option value={option} />
    {/each}
  </Select>
</FormGroup>
