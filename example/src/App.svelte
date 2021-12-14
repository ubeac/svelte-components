<script>
     import Alert from './components/Alert.svelte'
     import {Avatar, AvatarGroup} from '@ubeac/svelte-components'
     import { Badge } from '@ubeac/svelte-components'
     import {Breadcrumb, BreadcrumbItem} from '@ubeac/svelte-components'
     import {Button, ButtonGroup} from '@ubeac/svelte-components'
     import {Card, CardTitle, CardActions } from '@ubeac/svelte-components'
     import {Carousel, CarouselItem} from '@ubeac/svelte-components'
     import {Collapse} from '@ubeac/svelte-components'
     import {Countdown} from '@ubeac/svelte-components'   
     import {Divider} from '@ubeac/svelte-components'
     import {Drawer} from '@ubeac/svelte-components'
     import {Dropdown} from '@ubeac/svelte-components'
     import {Link} from '@ubeac/svelte-components'
     import {Image} from '@ubeac/svelte-components'
     import {MenuItem, Menu, MenuTitle} from '@ubeac/svelte-components'
     import {Modal, ModalActions} from '@ubeac/svelte-components'
     import {Navbar} from '@ubeac/svelte-components';
     import {Pagination, PaginationItem} from '@ubeac/svelte-components'
     import {Popover} from '@ubeac/svelte-components'
     import {Progress} from '@ubeac/svelte-components'
     import {Stack} from '@ubeac/svelte-components'
     import {Spinner} from '@ubeac/svelte-components'
     import {Step, Steps} from '@ubeac/svelte-components'
     import {TabContent, TabPane} from '@ubeac/svelte-components'
     import {Table, Cell, TableRow, TableHeader} from '@ubeac/svelte-components'
     import {Tooltip} from '@ubeac/svelte-components'
     import {FormGroup, Label, Input, Checkbox, Radio, RadioGroup, Option, Select, Range, TextArea, Toggle} from '@ubeac/svelte-components'
  

     let drawerOpen = false;
     let modalOpen = false;
     let count = 0;

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
          <Toggle>Dark Mode</Toggle>
     </svelte:fragment>
     
</Navbar>


<Alert />
<Card />

<Avatar size="sm" online label="SM"/>
<Avatar size="md" online label="MD"/>

<AvatarGroup size="lg">
     <Avatar image="/example/images/users/avatar-1.jpg" />
     <Avatar image="/example/images/users/avatar-1.jpg" />
     <Avatar image="/example/images/users/avatar-1.jpg" />
</AvatarGroup>


<h1 class="text-lg m-2">Badge</h1>
<Badge variant="secondary">New</Badge>
<Badge>prima ry</Badge>
<Badge size="lg">lg</Badge>


<h1 class="text-lg m-2">Breadcrumb</h1>
<Breadcrumb>
     <BreadcrumbItem>Hello</BreadcrumbItem>
     <BreadcrumbItem>World</BreadcrumbItem>
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
<Carousel class="max-w-md" center>
     {#each Array.from({length: 7}).fill(0) as item, index}
          <CarouselItem class="m-1 rounded-box shadow overflow-hidden">
               <img class="max-w-sm" alt="carousel {index}" src="/example/images/small/img-{index+1}.jpg">
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
     <img class="max-w-sm" slot="image" src="/example/images/small/img-1.jpg" alt="test">
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
<Dropdown position="right" class="menu">
     // TODO: fix this after adding Menu and MenuItem components
     <svelte:fragment slot="title">
          Dropdown
     </svelte:fragment>
     <ul class="menu w-56 bg-base-100 text-base-content">
          <li><a href="#">Item 1</a></li>
          <li><a href="#">Item 2</a></li>
          <li><a href="#">Item 3</a></li>
     </ul>     
</Dropdown>


<h1 class="text-lg m-2">Image</h1>
<Image rounded shadow src="/example/images/small/img-4.jpg" alt="something"/>


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
          <FormGroup inline>

               <Checkbox size="xs">Item 1</Checkbox>
               <Checkbox size="xs">Item 2</Checkbox>
               <Checkbox size="xs">Item 3</Checkbox>
               <Checkbox size="xs">Item 4</Checkbox>
          </FormGroup>
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



<div class="p-4 bg-gray-200 text-red-600">Svelte App</div>