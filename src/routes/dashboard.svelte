<script>
  import "../styles.css";
  
  import { layoutSettings } from '$lib/store.js'

  import { Layout } from "$lib/layouts";
  import { Button } from "$lib/index.js";
  import { Icon } from "$lib/index.js";
  import { Dropdown } from "$lib/index.js";
  import { Card, CardTitle } from "$lib/index.js";
  import { FormGroup ,Label ,RadioGroup } from "$lib/index.js";
  import { MenuItem, Menu, MenuTitle } from "$lib/index.js";
  import {Table, Cell, TableRow, TableHeader} from '$lib/index.js'
  import {Pagination, PaginationItem} from '$lib/index.js'
  import {Footer, FooterCol} from '$lib/index.js'
  import {Link} from '$lib/index.js'

</script>

<Layout>

  <svelte:fragment slot="navbar">
    <Dropdown position="bottom" end>
      <svelte:fragment slot="title">
        <Button variant="ghost" square>
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

  <div class="flex flex-col gap-4">

    <div class="flex items-center justify-end gap-4 p-6 bg-base-200 rounded-box">
      <Button class="gap-2" size="sm">
        <Icon name="fas-plus" size="sm" />
        Add new
      </Button>
    </div>
    
    <Table>
      <TableHeader>
        <Cell>ID</Cell>
        <Cell>Username</Cell>
        <Cell>First Name</Cell>
        <Cell>Last Name</Cell>
        <Cell>Email</Cell>
        <Cell>Last login</Cell>
        <Cell></Cell>
      </TableHeader>
      <TableRow>
        <Cell>1</Cell>
        <Cell>michael23</Cell>
        <Cell>Michael</Cell>
        <Cell>Jordan</Cell>
        <Cell>Mossie_Marvin@yahoo.com</Cell>
        <Cell>2018-09-14</Cell>
        <Cell>
          <Button square variant="ghost" size="sm">
            <Icon name="fas-pen" size="sm" />
          </Button>
          <Button square variant="ghost" size="sm">
            <Icon name="fas-trash" size="sm" />
          </Button>
        </Cell>
      </TableRow>
      <TableRow>
        <Cell>1</Cell>
        <Cell>michael23</Cell>
        <Cell>Michael</Cell>
        <Cell>Jordan</Cell>
        <Cell>Mossie_Marvin@yahoo.com</Cell>
        <Cell>2018-09-14</Cell>
        <Cell>
          <Button square variant="ghost" size="sm">
            <Icon name="fas-pen" size="sm" />
          </Button>
          <Button square variant="ghost" size="sm">
            <Icon name="fas-trash" size="sm" />
          </Button>
        </Cell>
      </TableRow>
      <TableRow>
        <Cell>1</Cell>
        <Cell>michael23</Cell>
        <Cell>Michael</Cell>
        <Cell>Jordan</Cell>
        <Cell>Mossie_Marvin@yahoo.com</Cell>
        <Cell>2018-09-14</Cell>
        <Cell>
          <Button square variant="ghost" size="sm">
            <Icon name="fas-pen" size="sm" />
          </Button>
          <Button square variant="ghost" size="sm">
            <Icon name="fas-trash" size="sm" />
          </Button>
        </Cell>
      </TableRow>
      <TableRow>
        <Cell>1</Cell>
        <Cell>michael23</Cell>
        <Cell>Michael</Cell>
        <Cell>Jordan</Cell>
        <Cell>Mossie_Marvin@yahoo.com</Cell>
        <Cell>2018-09-14</Cell>
        <Cell>
          <Button square variant="ghost" size="sm">
            <Icon name="fas-pen" size="sm" />
          </Button>
          <Button square variant="ghost" size="sm">
            <Icon name="fas-trash" size="sm" />
          </Button>
        </Cell>
      </TableRow>
      <TableRow>
        <Cell>1</Cell>
        <Cell>michael23</Cell>
        <Cell>Michael</Cell>
        <Cell>Jordan</Cell>
        <Cell>Mossie_Marvin@yahoo.com</Cell>
        <Cell>2018-09-14</Cell>
        <Cell>
          <Button square variant="ghost" size="sm">
            <Icon name="fas-pen" size="sm" />
          </Button>
          <Button square variant="ghost" size="sm">
            <Icon name="fas-trash" size="sm" />
          </Button>
        </Cell>
      </TableRow>
    </Table>

    <div class="flex items-center justify-center gap-4 p-6 bg-base-200 rounded-box">
      <span class="text-xs opacity-50">Showing items 1 to 10 of 100</span>
      <Pagination>
        <PaginationItem variant="neutral" size="sm">Prev</PaginationItem>
        <PaginationItem variant="neutral" size="sm">Next</PaginationItem>
      </Pagination>
    </div>
    
  </div>

  <Footer>
    <FooterCol title="About">
      <Link hover href="#">Link title</Link>
      <Link hover href="#">Link title</Link>
      <Link hover href="#">Link title</Link>
      <Link hover href="#">Link title</Link>
    </FooterCol>
    <FooterCol title="Social">
      <Link hover href="#">Link title</Link>
      <Link hover href="#">Link title</Link>
      <Link hover href="#">Link title</Link>
      <Link hover href="#">Link title</Link>
    </FooterCol>
    <FooterCol title="Links">
      <Link hover href="#">Link title</Link>
      <Link hover href="#">Link title</Link>
      <Link hover href="#">Link title</Link>
      <Link hover href="#">Link title</Link>
    </FooterCol>
  </Footer>

</Layout>
