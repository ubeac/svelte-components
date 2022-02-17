<script lang="ts">
  import { Accordion, AccordionItem } from "sveltestrap";
</script>

<Accordion>
  <AccordionItem active header="Home">Fallbrook</AccordionItem>
  <AccordionItem header="School">
    <a href="#home">Buena Vista Elementary</a>
  </AccordionItem>
  <AccordionItem header="Library">UCSB Library</AccordionItem>
</Accordion>

<svelte:head>
  <link
    rel="stylesheet"
    href="node_modules/@tabler/core/dist/css/tabler.min.css"
  />
</svelte:head>
<!-- <style lang="scss" global>
  @import "@tabler/core/dist/css/tabler.min.css";
</style> -->
