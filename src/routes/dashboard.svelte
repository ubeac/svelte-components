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
    <Menu>
      <MenuItem>
        <Icon slot="prefix" name="fas-user" />
        <span class="hidden">Item 1</span>
      </MenuItem>
      <MenuItem>
        <Icon slot="prefix" name="fas-user" />
        <span class="hidden">Item 2</span>
      </MenuItem>
      <MenuItem>
        <Icon slot="prefix" name="fas-user" />
        <span class="hidden">Item 3</span>
      </MenuItem>
    </Menu>
  </span>
  <Button class="m-2" variant="secondary">Secondary</Button>
</Layout>
