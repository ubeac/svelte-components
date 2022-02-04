<script>
  import "../styles.css";
  import { Dashboard } from "$lib";
  import {
    Button,
    Icon,
    Dropdown,
    Card, CardTitle,
    FormGroup ,Label ,RadioGroup,
    MenuItem, Menu, MenuTitle,
    Table, Cell, TableRow, TableHeader,
    Pagination, PaginationItem,
    Footer, FooterCol,
    Link,
    Input,
    Grid
  } from '$lib/index.js'
  
  let sidebarMode = 'open'  // open | close | mini
  let navbarMode = 'wide'  // wide | tight
  let navbarColor = 'neutral'  // base | neutral | primary
  let sidebarColor = 'base'  // base | neutral | primary

</script>

<Dashboard title="Dashboard" bind:sidebarMode bind:navbarMode bind:navbarColor bind:sidebarColor>

  <svelte:fragment slot="navbar-end">
    <Input variant="ghost" size="sm" type="text" placeholder="Search"/>
    <Dropdown position="bottom" end>
      <svelte:fragment slot="title">
        <Button variant="ghost" square size="sm">
          <Icon size="sm" name="fas-sliders-h" />
        </Button>
      </svelte:fragment>
      <Card class="w-64 p-4 mt-6 shadow-2xl bg-base-100 text-base-content sm:w-80">
        <CardTitle slot="title">Settings</CardTitle>
        
        <FormGroup>
          <Label>Sidebar mode</Label>
          <RadioGroup size="xs" name="sidebarMode" options={["close", "open", "mini"]} bind:value={sidebarMode} />
        </FormGroup>

        <FormGroup>
          <Label>Navbar mode</Label>
          <RadioGroup size="xs" name="navbarMode" options={["wide", "tight"]} bind:value={navbarMode} />
        </FormGroup>

        <FormGroup>
          <Label>Navbar color</Label>
          <RadioGroup size="xs" name="navbarColor" options={["neutral", "base", "primary"]} bind:value={navbarColor} />
        </FormGroup>

        <FormGroup>
          <Label>Sidebar color</Label>
          <RadioGroup size="xs" name="sidebarColor" options={["neutral", "base", "primary"]} bind:value={sidebarColor} />
        </FormGroup>

      </Card>
    </Dropdown>
  </svelte:fragment>

  <svelte:fragment slot="sidebar">
    <Menu class="py-2 bg-transparent grow" compact=true>
      <MenuItem iconOnly={sidebarMode == "mini"}>
        <Icon size="sm" slot="prefix" name="fas-home" />
        Item 1
      </MenuItem>
      <MenuItem iconOnly={sidebarMode == "mini"}>
        <Icon size="sm" slot="prefix" name="fas-th-large" />
        Item 2
      </MenuItem>
      <MenuItem iconOnly={sidebarMode == "mini"}>
        <Icon size="sm" slot="prefix" name="fas-th-large" />
        Some Nested Items
        <Menu slot="submenu" class="py-2 bg-transparent" compact=true>
          <MenuItem iconOnly={sidebarMode == "mini"}>
            <Icon size="sm" slot="prefix" name="fas-home" />
            Item 1
          </MenuItem>
          <MenuItem iconOnly={sidebarMode == "mini"}>
            <Icon size="sm" slot="prefix" name="fas-th-large" />
            Item 2
          </MenuItem>
          <MenuItem iconOnly={sidebarMode == "mini"}>
            <Icon size="sm" slot="prefix" name="fas-file" />
            Item 3
          </MenuItem>
          <MenuItem iconOnly={sidebarMode == "mini"}>
            <Icon size="sm" slot="prefix" name="fas-magic" />
            Item 4
          </MenuItem>
          <MenuItem iconOnly={sidebarMode == "mini"}>
            <Icon size="sm" slot="prefix" name="fas-layer-group" />
            Item 5
          </MenuItem>
          <MenuItem iconOnly={sidebarMode === "mini"}>
            <Icon size="sm" slot="prefix" name="fas-table" />
            Item 6
          </MenuItem>
        </Menu>
      </MenuItem>
      <MenuItem iconOnly={sidebarMode == "mini"}>
        <Icon size="sm" slot="prefix" name="fas-magic" />
        Item 4
      </MenuItem>
      <MenuItem iconOnly={sidebarMode == "mini"}>
        <Icon size="sm" slot="prefix" name="fas-layer-group" />
        Item 5
      </MenuItem>
      <MenuItem iconOnly={sidebarMode === "mini"}>
        <Icon size="sm" slot="prefix" name="fas-table" />
        Item 6
      </MenuItem>
    </Menu>
  </svelte:fragment>

  <Grid cols=4 gap=3>
    <div class="shadow stats">
      <div class="stat">
        <div class="text-blue-500 opacity-100 stat-title">Today Page Views</div> 
        <div class="stat-value">8,400</div> 
        <div class="stat-desc">21% more than last month</div>
      </div>
    </div>
    <div class="shadow stats">
      <div class="stat">
        <div class="text-green-500 opacity-100 stat-title">Total Page Views</div> 
        <div class="stat-value">89,400</div> 
        <div class="stat-desc">21% more than last month</div>
      </div>
    </div>
    <div class="shadow stats">
      <div class="stat">
        <div class="text-orange-500 opacity-100 stat-title">Total Users</div> 
        <div class="stat-value">89,400</div> 
        <div class="stat-desc">21% more than last month</div>
      </div>
    </div>
    <div class="shadow stats">
      <div class="stat">
        <div class="text-pink-500 opacity-100 stat-title">Sales growth</div> 
        <div class="stat-value">2.5%</div> 
        <div class="stat-desc">1% more than last month</div>
      </div>
    </div>
  </Grid>

  <Grid cols=1 gap=3>
    <Card>
      <div class="flex flex-col gap-4">

        <div class="flex items-center justify-end gap-4 m-4 mb-0">
          <Button class="gap-2" size="xs">
            <Icon name="fas-plus" size="xs" />
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

        <div class="flex items-center justify-end gap-4 m-4 mt-0">
          <span class="text-xs opacity-50">Showing items 1 to 10 of 100</span>
          <Pagination>
            <PaginationItem variant="outline" size="xs">Prev</PaginationItem>
            <PaginationItem variant="outline" size="xs">Next</PaginationItem>
          </Pagination>
        </div>
        
      </div>
    </Card>
  </Grid>
  <Grid cols=2 gap=3>
    <Card>
      <div class="flex flex-col gap-4">

        <div class="flex items-center justify-end gap-4 m-4 mb-0">
          <Button class="gap-2" size="xs">
            <Icon name="fas-plus" size="xs" />
            Add new
          </Button>
        </div>
        
        <Table>
          <TableHeader>
            <Cell>ID</Cell>
            <Cell>Username</Cell>
            <Cell>Email</Cell>
            <Cell>Last login</Cell>
            <Cell></Cell>
          </TableHeader>
          <TableRow>
            <Cell>1</Cell>
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

        <div class="flex items-center justify-end gap-4 m-4 mt-0">
          <span class="text-xs opacity-50">Showing items 1 to 10 of 100</span>
          <Pagination>
            <PaginationItem variant="outline" size="xs">Prev</PaginationItem>
            <PaginationItem variant="outline" size="xs">Next</PaginationItem>
          </Pagination>
        </div>
        
      </div>
    </Card>
    <Card>
      <div class="flex flex-col gap-4">

        <div class="flex items-center justify-end gap-4 m-4 mb-0">
          <Button class="gap-2" size="xs">
            <Icon name="fas-plus" size="xs" />
            Add new
          </Button>
        </div>
        
        <Table>
          <TableHeader>
            <Cell>ID</Cell>
            <Cell>Username</Cell>
            <Cell>Email</Cell>
            <Cell>Last login</Cell>
            <Cell></Cell>
          </TableHeader>
          <TableRow>
            <Cell>1</Cell>
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

        <div class="flex items-center justify-end gap-4 m-4 mt-0">
          <span class="text-xs opacity-50">Showing items 1 to 10 of 100</span>
          <Pagination>
            <PaginationItem variant="outline" size="xs">Prev</PaginationItem>
            <PaginationItem variant="outline" size="xs">Next</PaginationItem>
          </Pagination>
        </div>
        
      </div>
    </Card>
  </Grid>

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

</Dashboard>
