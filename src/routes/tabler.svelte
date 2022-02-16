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

<!-- <svelte:head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
  />
</svelte:head> -->

<style lang="scss" global>
  @import "../scss/tabler";
</style>
