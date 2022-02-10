<script lang="ts">
  let className = "";
  export { className as class };

  export let inline: Boolean = false;

  /**
   * Size of typography
   */
  export let size:
    | "headline1"
    | "headline2"
    | "headline3"
    | "headline4"
    | "headline5"
    | "headline6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption"
    | "button"
    | "overline" = "body1";
</script>

<div
  {...$$restProps}
  class="typography typography-{size} {className}"
  class:inline
>
  <slot />
</div>

<style>
  :global(.typography-headline1) {
    font-weight: 300;
    font-size: 6rem;
    line-height: 1.167;
    letter-spacing: -0.01562em;
  }
  :global(.typography-headline2) {
    font-weight: 300;
    font-size: 3.75rem;
    line-height: 1.2;
    letter-spacing: -0.00833em;
  }
  :global(.typography-headline3) {
    font-weight: 400;
    font-size: 3rem;
    line-height: 1.167;
    letter-spacing: 0em;
  }
  :global(.typography-headline4) {
    font-weight: 400;
    font-size: 2.125rem;
    line-height: 1.235;
    letter-spacing: 0.00735em;
  }
  :global(.typography-headline5) {
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 1.334;
    letter-spacing: 0em;
  }
  :global(.typography-headline6) {
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 1.6;
    letter-spacing: 0.0075em;
  }
  :global(.typography-subtitle1) {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.75;
    letter-spacing: 0.00938em;
  }
  :global(.typography-subtitle2) {
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.57;
    letter-spacing: 0.00714em;
  }
  :global(.typography-body1) {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5;
    letter-spacing: 0.00938em;
  }
  :global(.typography-body2) {
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.43;
    letter-spacing: 0.01071em;
  }
  :global(.typography-caption) {
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1.66;
    letter-spacing: 0.03333em;
    margin-bottom: 0.35em;
  }
  :global(.typography-button) {
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.75;
    letter-spacing: 0.02857em;
    text-transform: uppercase;
  }
  :global(.typography-overline) {
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 2.66;
    letter-spacing: 0.08333em;
    text-transform: uppercase;
  }
</style>
