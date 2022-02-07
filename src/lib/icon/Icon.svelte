<script lang="ts">
  import Icon from "@iconify/svelte";

  export let icon: string;
  export let inline: boolean = true;
  export let width: number | string = "1em";
  export let height: number | string = "1em";
  export let color: string = "";
</script>

<Icon {icon} {inline} {width} {height} {color} {...$$restProps} />
