<script>
  import "../styles.css";
  import { Layout } from "$lib/layouts";
  import { Button } from "$lib/index.js";
  import { Icon } from "$lib/index.js";
  import { Dropdown } from "$lib/index.js";
  import { Card, CardTitle } from "$lib/index.js";
  import { FormGroup ,Label ,RadioGroup } from "$lib/index.js";
  import { MenuItem, Menu, MenuTitle } from "$lib/index.js";

  import { layoutSettings } from '$lib/store.js'

</script>

<Layout>

  <svelte:fragment slot="navbar">
    <Dropdown position="bottom" end>
      <svelte:fragment slot="title">
        <Button variant="neutral" square>
          <Icon name="fas-cog" />
        </Button>
      </svelte:fragment>
      <Card class="w-64 mt-4 shadow-2xl bg-base-100 text-base-content sm:w-80">
        <CardTitle slot="title">Settings</CardTitle>
        
        <FormGroup>
          <Label>Sidebar mode</Label>
          <RadioGroup name="sidebarMode" options={["close", "open", "mini"]} bind:value={$layoutSettings.sidebarMode} />
        </FormGroup>

        <FormGroup>
          <Label>Navbar mode</Label>
          <RadioGroup name="navbarMode" options={["wide", "tight"]} bind:value={$layoutSettings.navbarMode} />
        </FormGroup>

        <FormGroup>
          <Label>Navbar color</Label>
          <RadioGroup name="navbarColor" options={["neutral", "base", "primary"]} bind:value={$layoutSettings.navbarColor} />
        </FormGroup>

      </Card>
    </Dropdown>
  </svelte:fragment>

  <svelte:fragment slot="sidebar">
    <Menu class="bg-transparent grow">
      <MenuItem iconOnly={$layoutSettings.sidebarMode == "mini" ? false : true}>
        <Icon slot="prefix" name="fas-user" />
        Item 1
      </MenuItem>
      <MenuItem iconOnly={$layoutSettings.sidebarMode == "mini" ? false : true}>
        <Icon slot="prefix" name="fas-user" />
        Item 2
      </MenuItem>
      <MenuItem iconOnly={$layoutSettings.sidebarMode == "mini" ? false : true}>
        <Icon slot="prefix" name="fas-user" />
        Item 3
      </MenuItem>
    </Menu>
  </svelte:fragment>

  <Button class="m-2" variant="secondary">Secondary</Button>
  
</Layout>
