<script>
  let className = "";
  export { className as class };

  export let inline = false;
</script>

<form
  {...$$restProps}
  class="w-full flex items-end gap-2 {className}"
  class:flex-col={!inline}
>
  <slot />
</form>
