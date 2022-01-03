<script>
  import "../styles.css";
  import { Layout } from "$lib/layouts";
  import { Button } from "$lib/index.js";
  import { Icon } from "$lib/index.js";
  import { MenuItem, Menu, MenuTitle } from "$lib/index.js";
</script>

<Layout sidebarMode="open" navbarMode="wide">
  <span slot="navbar"> navbar </span>
  <span slot="sidebar">
    <Menu class="h-full bg-transparent">
      <MenuItem>
        <Icon slot="prefix" name="fas-user" />
        Item 1
      </MenuItem>
      <MenuItem>
        <Icon slot="prefix" name="fas-user" />
        Item 2
      </MenuItem>
      <MenuItem>
        <Icon slot="prefix" name="fas-user" />
        Item 3
      </MenuItem>
    </Menu>
  </span>
  <Button class="m-2" variant="secondary">Secondary</Button>
</Layout>
