<script lang="ts">
  import type { Variant } from "$lib/types";

  import { tweened } from "svelte/motion";

  export let variant: Variant = "primary";
  export let indeterminate: boolean = false;
  export let duration: number = 1000;
  export let initialMax: number = 100;
  export let show: boolean = false;

  let value = tweened(0, { duration });

  let tasksLength = 0;

  let intervalId;

  function increment(val) {
    $value += val;
  }

  function start() {
    intervalId = setInterval(
      () => increment((initialMax - $value) / 4),
      duration
    );
  }

  export function push(number) {
    tasksLength += number ?? initialMax / 4;
  }

  export function pop(number) {
    tasksLength -= number ?? initialMax / 4;
    if (tasksLength <= 0) {
      tasksLength = 0;
      done();
    }
  }

  export function done() {
    clearInterval(intervalId);
    value.set(max, { duration: duration / 2 });
    setTimeout(() => (show = false), duration / 2);
  }

  $: if ($value > (max * 95) / 100) {
    clearInterval(intervalId);
  }

  $: if (show) start();

  $: max = initialMax + tasksLength;
</script>

<div
  class="ubeac-loading overflow-hidden relative h-1 bg-{variant} bg-opacity-20"
  class:hidden={!show}
>
  <div
    style="width: {($value * 100) / max}%; left: 0"
    class="ubeac-loading-bar absolute h-full bg-{variant}"
    class:left-0={indeterminate}
    class:indeterminate
  />
</div>

<style>
  .indeterminate {
    animation: animate-progress 1s linear infinite;
  }

  @keyframes animate-progress {
    0% {
      left: 0%;
      width: 0%;
    }
    50% {
      left: 10%;
      width: 80%;
    }
    100% {
      left: 100%;
      width: 0%;
    }
  }
</style>
