<script>
  import { auto } from "@popperjs/core";

  import { createEventDispatcher, onMount, onDestroy } from "svelte";

  export let initial = "";

  export let placeholder = "";

  export let value = {
    title: initial,
  };

  let autocomplete, element;

  const dispatch = createEventDispatcher();

  $: element && (element.value = value.title || "");

  const change = () => {
    const place = autocomplete.getPlace();
    try {
      let address = "",
        postcode = "",
        locality,
        state,
        country;
      for (const component of place.address_components) {
        switch (component.types[0]) {
          case "street_number":
            address = `${component.long_name} ${address}`;
            break;
          case "route":
            address += component.short_name;
            break;
          case "postal_code":
            postcode = `${component.long_name}${postcode}`;
            break;
          case "postal_code_suffix":
            postcode = `${postcode}-${component.long_name}`;
            break;
          case "locality":
            locality = component.long_name;
            break;
          case "administrative_area_level_1":
            state = component.short_name;
            break;
          case "country":
            country = component.long_name;
            break;
        }
      }
      value = {
        title: element.value,
        parsed: {
          address,
          postcode,
          locality,
          state,
          country,
        },
        ...place,
      };
    } catch {
      value = {
        title: place.name,
      };
    }
    dispatch("change", value);
  };

  onMount(() => {
    autocomplete = new window["google"].maps.places.Autocomplete(element);
    if (!autocomplete) {
    }
    autocomplete?.addListener("place_changed", change);
  });

  onDestroy(() => {
    autocomplete?.unbindAll();
  });
</script>

{#if !autocomplete}
  <div
    {...$$restProps}
    class="border border-neutral p-2 py-4 map w-full text-center "
  >
    Cannot use GoogleAutoComplete without loading it's map script
    <br />
    You should add the script tag for google map in head section of your html
  </div>
{/if}
<input
  {...$$restProps}
  class="input w-full input-bordered"
  class:hidden={!autocomplete}
  type="text"
  {placeholder}
  bind:value={initial}
  bind:this={element}
/>
