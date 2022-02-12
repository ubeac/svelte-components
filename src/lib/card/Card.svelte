<script>
  import clsx from "clsx";

  let className = "";
  export { className as class };

  /**
   * adds border
   */
  export let bordered = true;

  /**
   * draw shadow for card
   * @type {boolean | 'none' | import('../types').Size}
   */
  export let shadow = false;

  const shadows = {
    none: "",
    xs: "shadow-sm",
    sm: "shadow-md",
    md: "shadow-lg",
    lg: "shadow-xl",
  };

  $: {
    if (shadow === true) {
      shadow = "sm";
    }
  }

  $: classes = clsx(
    "ubeac-card",
    "rounded",
    shadow && shadows[shadow],
    bordered && "border border-base-300",
    className
  );
</script>

<div class={classes}>
  <slot />
</div>
