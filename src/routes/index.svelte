<script>
     import '../styles.css'
     import {Alert} from '$lib/index.js'
     import {Avatar, AvatarGroup} from '$lib/index.js'
     import { Badge } from '$lib/index.js'
     import {Breadcrumb, BreadcrumbItem} from '$lib/index.js'
     import {Button, ButtonGroup} from '$lib/index.js'
     import {Card, CardTitle, CardActions } from '$lib/index.js'
     import {Carousel, CarouselItem} from '$lib/index.js'
     import {Icon} from '$lib/index.js'
     import {Collapse} from '$lib/index.js'
     import {Countdown} from '$lib/index.js'   
     import {Divider} from '$lib/index.js'
     import {Drawer} from '$lib/index.js'
     import {Dropdown} from '$lib/index.js'
     import {Link} from '$lib/index.js'
     import {Image} from '$lib/index.js'
     import {MenuItem, Menu, MenuTitle} from '$lib/index.js'
     import {Modal, ModalActions} from '$lib/index.js'
     import {Navbar} from '$lib/index.js';
     import {Pagination, PaginationItem} from '$lib/index.js'
     import {Popover} from '$lib/index.js'
     import {Progress} from '$lib/index.js'
     import {Stack} from '$lib/index.js'
     import {Spinner} from '$lib/index.js'
     import {Step, Steps} from '$lib/index.js'
     import {TabContent, TabPane} from '$lib/index.js'
     import {Table, Cell, TableRow, TableHeader} from '$lib/index.js'
     import {Tooltip} from '$lib/index.js'
     import {FormGroup, Label, Input, Checkbox, CheckboxGroup, Radio, RadioGroup, Option, Select, Range, TextArea, Toggle} from '$lib/index.js'
  

     let drawerOpen = false;
     let modalOpen = false;
     let count = 0;
     let dark = false

     $: {
          if(typeof document !== 'undefined')
               document.body.parentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
     }


     setInterval(() => {
          count = count + 1
     }, 1000);
</script>


<Navbar fixed shadow>
     <svelte:fragment slot="start">
          <Button variant="ghost">Left</Button>          
          <Button variant="ghost">Another</Button>          
     </svelte:fragment>

     <svelte:fragment slot="center">
          Svelte Components
     </svelte:fragment>

     <svelte:fragment slot="end">
          <Toggle bind:checked={dark}>Dark Mode</Toggle>
     </svelte:fragment>
     
</Navbar>


<Alert />
<Card />

<Avatar size="sm" online label="SM"/>
<Avatar size="md" online label="MD"/>

<AvatarGroup size="lg">
     <Avatar image="/users/avatar-1.jpg" />
     <Avatar image="/users/avatar-2.jpg" />
     <Avatar image="/users/avatar-3.jpg" />
</AvatarGroup>


<h1 class="text-lg m-2">Badge</h1>
<Badge variant="secondary">New</Badge>
<Badge>prima ry</Badge>
<Badge size="lg">lg</Badge>


<h1 class="text-lg m-2">Breadcrumb</h1>
<Breadcrumb>
     <BreadcrumbItem>Hello</BreadcrumbItem>
     <BreadcrumbItem href="#">World</BreadcrumbItem>
     <BreadcrumbItem active>123</BreadcrumbItem>
</Breadcrumb>


<h1 class="text-lg m-2">Button</h1>
<Button class="m-2" variant="secondary">Secondary</Button>
<Button class="m-2" size="sm" variant="accent">Small</Button>
<Button class="m-2" wide>wide</Button>

<ButtonGroup class="m-2" size="lg">
     <Button>Easy</Button>
     <Button active>Medium</Button>
     <Button>Hard</Button>
</ButtonGroup>


<h1 class="text-lg m-2">Carousel</h1>
<Carousel buttons indicators class="max-w-md" center>
     {#each Array.from({length: 7}).fill(0) as item, index}
          <CarouselItem class="m-1 rounded-box shadow overflow-hidden">
               <img class="max-w-sm" alt="carousel {index}" src="/small/img-{index+1}.jpg">
          </CarouselItem>
     {/each}

</Carousel>



<h1 class="text-lg m-2">Card</h1>
<div class="flex space-x-2 space-y-2 flex-col sm:flex-row">

<Card>
     <CardTitle slot="title">Card Title</CardTitle>
     <CardActions slot="actions">
          <div>Action 1</div>
          <div>Action 2</div>
     </CardActions>
     this is content of card
</Card>
<Divider vertical>VS</Divider>

<Card shadow position="full">
     <CardTitle slot="title">Another Card</CardTitle>
     <CardActions slot="actions">
          <div>Action</div>
     </CardActions>
     this is content of card
     <img class="max-w-sm" slot="image" src="/small/img-1.jpg" alt="test">
</Card>
</div>
<Divider/>


<h1 class="text-lg font-bold">Countdown</h1>
<Countdown class="p-6 m-4 bg-gray-900 rounded-box shadow text-neutral-content" value={count} />


<h1 class="text-lg m-2">Collapse</h1>
<div class="flex p-2 space-x-2">

<Collapse arrow>
     <svelte:fragment slot="title">
          Title of collapse
     </svelte:fragment>
     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem soluta, libero nemo dignissimos fugiat error nisi nostrum molestiae esse aliquam. Eveniet praesentium eum nisi officiis recusandae, error facilis! Necessitatibus, quo.
</Collapse>
<Collapse plus click>
     <svelte:fragment slot="title">
          Title of collapse
     </svelte:fragment>
     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem soluta, libero nemo dignissimos fugiat error nisi nostrum molestiae esse aliquam. Eveniet praesentium eum nisi officiis recusandae, error facilis! Necessitatibus, quo.
</Collapse>
</div>



<Button on:click={() => drawerOpen = true}>Open Drawer</Button>
<Drawer hover position="right" bind:show={drawerOpen}>
     This should open from right side 
</Drawer>


<h1 class="text-lg m-2">Dropdown</h1>
<Dropdown position="right" end class="w-32">
     <svelte:fragment slot="title">
          Dropdown
     </svelte:fragment>
     <Menu>
          <MenuItem>
               <Icon slot="prefix" name="fas-user"/>
               Item 1
          </MenuItem>
          <MenuItem>Item 2</MenuItem>
          <MenuItem>Item 3</MenuItem>
     </Menu>    
</Dropdown>


<h1 class="text-lg m-2">Image</h1>
<Image rounded shadow src="/small/img-4.jpg" alt="something"/>


<h1 class="text-lg m-2">Link</h1>
<Link hover href="#">
top
</Link>


<h1 class="text-lg m-2">Menu</h1>
<Menu class="m-2 w-80 bg-gray-200" rounded compact>
     <MenuTitle>first</MenuTitle>
     <MenuItem>Item 1</MenuItem>
     <MenuItem>Item 2</MenuItem>
     <MenuTitle>second</MenuTitle>
     <MenuItem>Item 3</MenuItem>
     <MenuItem>Item 4</MenuItem>
     <MenuItem>Item 5</MenuItem>
</Menu>


<h1 class="text-lg m-2">Modal</h1>
<Button on:click={() => modalOpen = true}>Open Modal</Button>
<Modal bind:open={modalOpen}>
     Lorem, ipsum dolor sit amet consectetur adipisicinde leniti animi, ducimus provident quis. At fugit votate moll iquid molestias ipsam sed vel beatae optio ducimus.
     <ModalActions center>
          <Button on:click={() => modalOpen = false}>Close</Button>
     </ModalActions>
</Modal>

<h1 class="text-lg m-2">Pagination</h1>
<Pagination variant="secondary">
     <PaginationItem>Prev</PaginationItem>
     <PaginationItem>1</PaginationItem>
     <PaginationItem>2</PaginationItem>
     <PaginationItem active>3</PaginationItem>
     <PaginationItem>4</PaginationItem>
     <PaginationItem>Next</PaginationItem>
</Pagination>


<h1 class="text-lg m-2">Popover</h1>
<Button id="pop-target">Open</Button>
<Popover hover target="pop-target">
     <div>Hello from Popover</div>
</Popover>

<form>

     <FormGroup id="email" name="email">
          <Label>Email:</Label>
          <Input variant="success" type="email"/>
     </FormGroup>
     <FormGroup id="email" name="email">
          <Label>Email:</Label>
          <Input variant="accent" bordered type="email"/>
     </FormGroup>
     <FormGroup id="email" name="email">
          <Label>Email:</Label>
          <Input size="xs" variant="error" type="email"/>
     </FormGroup>

     <FormGroup inline>
          <Checkbox>Item 1</Checkbox>
          <Checkbox>Item 2</Checkbox>
          <Checkbox>Item 3</Checkbox>
          <Checkbox>Item 4</Checkbox>
     </FormGroup>

     <FormGroup>
          <Checkbox>Item 1</Checkbox>
          <Checkbox>Item 2</Checkbox>
          <Checkbox>Item 3</Checkbox>
          <Checkbox>Item 4</Checkbox>
     </FormGroup>

     <FormGroup>
          <Label>Checks: </Label>
          <CheckboxGroup inline size="xs" options={['Item 1', 'Item 2', 'Item 3', 'Item 4']}/>
     </FormGroup>
     <FormGroup>
          <Label>Radio Buttons:</Label>
          <RadioGroup inline name="radios" options={["option 1", "option 2", "option 3"]} />
     </FormGroup>
     <FormGroup>
          <Label>Enter some text: </Label>
          <TextArea variant="error" />
     </FormGroup>

     <Toggle size="xs">Toggle 1</Toggle>
     <Toggle variant="secondary">Toggle 2</Toggle>
     <Toggle variant="accent">Toggle 3</Toggle>

     <FormGroup>
          <Label>Range:</Label>
          <Range value=50/>
     </FormGroup>
     <FormGroup>
          <Label>Select something:</Label>
          <Select>
               <Option value="First" />
               <Option value="Second" />
               <Option value="Third" />
               <Option value="Fourth" />
          </Select>
     </FormGroup>
     
</form>



<h1 class="text-lg m-2">Spinner</h1>
<Spinner />
<Spinner variant="error" size="xs"/>

<h1 class="text-lg m-2">Stack</h1>
<Stack>
     <div class="w-96 h-64 bg-gray-800 text-white text-2xl">3</div>
     <div class="w-96 h-64 bg-gray-800 text-white text-2xl">2</div>
     <div class="w-96 h-64 bg-gray-800 text-white text-2xl">1</div>
</Stack>

<h1 class="text-lg m-2">Table</h1>

<Table>
     <TableHeader>
          <Cell>ID</Cell>
          <Cell>Name</Cell>
          <Cell>LastName</Cell>
     </TableHeader>
     <TableRow>
          <Cell>ID1</Cell>
          <Cell>Name1</Cell>
          <Cell>LastName1</Cell>
     </TableRow>
     <TableRow>
          <Cell>ID2</Cell>
          <Cell>Name2</Cell>
          <Cell>LastName2</Cell>
     </TableRow>
     <TableRow>
          <Cell>ID3</Cell>
          <Cell>Name3</Cell>
          <Cell>LastName3</Cell>
     </TableRow>
</Table>


<h1 class="text-lg m-2">Step</h1>
<Steps>
     <Step variant="primary">First</Step>
     <Step variant="accent">Second</Step>
     <Step variant="accent">Third</Step>
     <Step variant="accent">Fourth</Step>
     <Step>Fifth</Step>
</Steps>


<h1 class="text-lg m-2">Tab</h1>

<TabContent bordered>
     <TabPane name="first">
          Hello World!
     </TabPane>

     <TabPane name="second">
          Second Tab
     </TabPane>

     <TabPane disabled name="disabled">
          You can't see this text
     </TabPane>

     <TabPane name="third">
          another Tab
     </TabPane>


</TabContent>

<h1 class="text-lg m-2">Tooltip</h1>
<Tooltip text="Hello World!">
     <Button>Tooltip</Button>
</Tooltip>

<h1 class="text-lg m-2">Progress</h1>

<Progress value={40} />
<Progress variant="accent" value={90} />




<h1 class="text-lg m-2">Icon</h1>

<Icon name="bell"/>
<Icon class="text-red-800" name="bell"/>

<div class="p-4 bg-gray-200 text-red-600">Svelte App</div>