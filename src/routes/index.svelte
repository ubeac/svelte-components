<script>
  import "../styles.css";
  import { Alert } from "$lib/index.js";
  import { Avatar, AvatarGroup } from "$lib/index.js";
  import { Badge } from "$lib/index.js";
  import { Breadcrumb, BreadcrumbItem } from "$lib/index.js";
  import { Button, ButtonGroup } from "$lib/index.js";
  import { Card, CardTitle, CardActions } from "$lib/index.js";
  import { Carousel, CarouselItem } from "$lib/index.js";
  import { Icon } from "$lib/index.js";
  import { Collapse } from "$lib/index.js";
  import { Countdown } from "$lib/index.js";
  import { Divider } from "$lib/index.js";
  import { Drawer } from "$lib/index.js";
  import { Dropdown } from "$lib/index.js";
  import { Link } from "$lib/index.js";
  import { Image } from "$lib/index.js";
  import { MenuItem, Menu, MenuTitle } from "$lib/index.js";
  import { Modal, ModalActions } from "$lib/index.js";
  import { Navbar } from "$lib/index.js";
  import { Pagination, PaginationItem } from "$lib/index.js";
  import { Popover } from "$lib/index.js";
  import { Progress } from "$lib/index.js";
  import { Stack } from "$lib/index.js";
  import { Spinner } from "$lib/index.js";
  import { Step, Steps } from "$lib/index.js";
  import { TabContent, TabPane } from "$lib/index.js";
  import { Table, Cell, TableRow, TableHeader } from "$lib/index.js";
  import { Tooltip } from "$lib/index.js";
  import {
    FormGroup,
    Label,
    Input,
    Checkbox,
    CheckboxGroup,
    Radio,
    RadioGroup,
    Option,
    Select,
    Range,
    TextArea,
    Toggle,
  } from "$lib/index.js";
  import { GoogleMap } from "$lib/index.js";
  import { DatePicker } from "$lib/index.js";
  import { AutoComplete } from "$lib/index.js";
  import { Grid } from "$lib/index.js";
  import { Typography } from "$lib/index.js";

  import {
    FormInput,
    FormSelect,
    FormRange,
    FormTextArea,
    FormDatePicker,
    FormAutoComplete,
  } from "$lib/index.js";
  import GoogleAutoComplete from "$lib/map/GoogleAutoComplete.svelte";
  import Editor from "$lib/editor/Editor.svelte";
  import CardBody from "$lib/card/CardBody.svelte";
  import CardHeader from "$lib/card/CardHeader.svelte";
  import Form from "$lib/form/Form.svelte";
  import LoadingBar from "$lib/progress/LoadingBar.svelte";

  let drawerOpen = false;
  let modalOpen = false;
  let count = 0;
  let dark = false;

  $: {
    if (typeof document !== "undefined")
      document.body.parentElement.setAttribute(
        "data-theme",
        dark ? "dark" : "light"
      );
  }

  setInterval(() => {
    count = count + 1;
  }, 1000);

  let inputNumber = "";
  $: console.log(inputNumber);

  let dateValue = new Date();
  $: console.log(dateValue);

  let dateRange = [new Date(), new Date()];
  $: console.log(
    "from " +
      dateRange[0]?.toDateString() +
      " to " +
      dateRange[1]?.toDateString()
  );

  var iamges = [1, 2, 3, 4, 5, 6, 7];

  let autoCompleteValue = "";
  $: console.log({ autoCompleteValue });

  let formInputEmailValue = "";
  $: console.log({ type: typeof formInputEmailValue, formInputEmailValue });
  let formInputPasswordValue = "";
  $: console.log({
    type: typeof formInputPasswordValue,
    formInputPasswordValue,
  });
  let formInputNumberValue = 0;
  $: console.log({ type: typeof formInputNumberValue, formInputNumberValue });

  let formSelectValue = "";
  $: console.log({ formSelectValue });

  let formSelectLanguageValue = "";
  $: console.log({ formSelectLanguageValue });

  let formRangeValue = 0;
  $: console.log({ formRangeValue });

  let formTextAreaValue = "";
  $: console.log({ formTextAreaValue });

  let editorValue = "";
  $: console.log({ editorValue });

  let formFormInputValue = "";
  $: console.log({ formFormInputValue });

  let loadingRef = null;
  let loading2Ref = null;
  let loading3Show = true;

  let cardLoadingBarRef;
</script>

<LoadingBar bind:this={loadingRef} variant="primary" show />
<LoadingBar bind:this={loading2Ref} duration={2000} show variant="secondary" />
<LoadingBar bind:show={loading3Show} variant="accent" indeterminate />

<Navbar fixed shadow>
  <svelte:fragment slot="start">
    <Button on:click={() => loadingRef.done()} variant="ghost">Left</Button>
    <Button on:click={() => loading2Ref.done()} variant="ghost">Another</Button>
    <Button on:click={() => (loading3Show = !loading3Show)} variant="ghost"
      >Loading 3</Button
    >
  </svelte:fragment>

  <svelte:fragment slot="center">Svelte Components</svelte:fragment>

  <svelte:fragment slot="end">
    <Toggle bind:checked={dark}>Dark Mode</Toggle>
  </svelte:fragment>
</Navbar>

<br />
<br />
<br />

<Button on:click={() => loadingRef.push(20)}>Add Task For loading 1</Button>
<Button on:click={() => loadingRef.pop(20)}>remove Task From loading 1</Button>

<div class="p-4">
  <Card>
    <LoadingBar show bind:this={cardLoadingBarRef} />
    <CardBody>
      <CardTitle class="flex ">Test Loading Bar</CardTitle>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti culpa pariatur
      error id corporis ratione architecto magnam voluptatem nihil odit ipsum asperiores
      vitae, officiis quisquam hic dolorem ex eius quaerat.
      <CardActions>
        <Button on:click={() => cardLoadingBarRef.push(20)}>Add Task</Button>
        <Button on:click={() => cardLoadingBarRef.pop(20)}>remove Task</Button>
      </CardActions>
    </CardBody>
  </Card>
</div>

<Typography size="headline1">Headline1</Typography>
<Typography size="headline2">Headline2</Typography>
<Typography size="headline3">Headline3</Typography>
<Typography size="headline4">Headline4</Typography>
<Typography size="headline5">Headline5</Typography>
<Typography size="headline6">Headline6</Typography>
<Typography size="subtitle1">Subtitle1</Typography>
<Typography size="subtitle2">Subtitle2</Typography>
<Typography size="body1">Body1</Typography>
<Typography size="body2">Body2</Typography>
<Typography size="caption">Caption</Typography>
<Typography size="button">button</Typography>
<Typography size="overline">overline</Typography>

<div class="p-5">
  <Card>
    <CardHeader>Featured</CardHeader>
    <CardBody>
      <CardTitle>Special title treatment</CardTitle>
      <p>
        With supporting text below as a natural lead-in to additional content.
      </p>
      <CardActions>
        <Button>Go somewhere</Button>
      </CardActions>
    </CardBody>
  </Card>
</div>

<Grid cols={2} class="p-4 gap-4">
  <Card>
    <CardHeader>Form Input Header</CardHeader>
    <img alt="" src="/small/img-2.jpg" />
    <CardBody>
      <CardTitle>FormInput</CardTitle>
      <FormInput
        type="email"
        label="email"
        class="mt-2"
        bind:value={formInputEmailValue}
        placeholder="Your Email address"
        id="something"
      />
      <FormInput
        type="password"
        label="password"
        class="mt-2"
        bind:value={formInputPasswordValue}
      />
      <FormInput
        type="number"
        label="number"
        class="mt-2"
        bind:value={formInputNumberValue}
      />
      <CardActions position="end">
        <Button variant="ghost">Cancel</Button>
        <Button>Save</Button>
      </CardActions>
    </CardBody>
  </Card>

  <Card>
    <CardBody>
      <CardTitle>FormSelect</CardTitle>
      <FormSelect
        options={["one", "two", "three", "four", "five"]}
        placeholder="choose a number"
        label="numbers"
        class="mt-2"
        bind:value={formSelectValue}
        id="something"
      />
      <FormSelect
        label="languages"
        class="mt-2"
        options={["js", "java", "c++", "python", "html", "css", "php"]}
        placeholder="choose a language"
        bind:value={formSelectLanguageValue}
        id="something"
      />
    </CardBody>
  </Card>
  <Card>
    <CardHeader>FormRange</CardHeader>
    <CardBody>
      <FormRange
        label="range input {formRangeValue}"
        max={1000}
        bind:value={formRangeValue}
      />
    </CardBody>
  </Card>
  <Card class="hover-border">
    <CardHeader>FormTextArea</CardHeader>
    <CardBody>
      <FormTextArea
        placeholder="this is placeholder of text area"
        label="Text area"
        bind:value={formTextAreaValue}
      />
    </CardBody>
  </Card>

  <Card>
    <CardHeader>FormAutoComplete</CardHeader>

    <CardBody>
      <FormAutoComplete
        key="id"
        text="title"
        label="FormAutoComplete (Accommodation types)"
        fetch={async (query) => {
          return fetch(
            "https://packageapi.tripsupport.ca/api/Resource/GetAccommodationTypes"
          )
            .then((res) => res.json())
            .then((result) => result.data);
        }}
        bind:value={autoCompleteValue}
        let:option
      >
        <div>{option.title}</div>
      </FormAutoComplete>

      <FormGroup class="mt-2">
        <Label>AutoComplete (Accommodation types)</Label>
        <AutoComplete
          key="id"
          text="title"
          fetch={async (query) => {
            return fetch(
              "https://packageapi.tripsupport.ca/api/Resource/GetAccommodationTypes"
            )
              .then((res) => res.json())
              .then((result) => result.data);
          }}
          bind:value={autoCompleteValue}
          let:option
        >
          <div>{option.title}</div>
        </AutoComplete>
      </FormGroup>
    </CardBody>
  </Card>

  <Card>
    <CardHeader>FormDatePicker</CardHeader>
    <CardBody>
      <FormGroup>
        <Label>Single Day (DatePicker)</Label>
        <DatePicker bind:value={dateValue} />
      </FormGroup>
      <FormDatePicker
        class="mt-2"
        label="FormDatePicker Range"
        range
        bind:value={dateRange}
      />
    </CardBody>
  </Card>
</Grid>

<FormGroup class="p-4">
  <Label>Editor</Label>
  <Editor bind:value={editorValue} />
</FormGroup>

<Alert>
  <Icon slot="icon" icon="la:cog" />
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat consequatur exercitationem
  impedit tempora, veritatis deserunt, sint officiis rem vitae voluptas voluptate
  sed nulla cumque repellat, asperiores doloremque? Iure, nihil debitis.
  <Button slot="action">Close</Button>
</Alert>

<Avatar class="custom-avatar" size="sm" online label="SM" />
<Avatar size="md" online label="MD" />

<AvatarGroup size="lg">
  <Avatar image="/users/avatar-1.jpg" />
  <Avatar image="/users/avatar-2.jpg" />
  <Avatar image="/users/avatar-3.jpg" />
</AvatarGroup>

<FormGroup>
  <Label>Single Day</Label>
  <DatePicker bind:value={dateValue} />
</FormGroup>
<FormDatePicker label="FormDatePicker Range" range bind:value={dateRange} />

<Typography size="headline4">Badge</Typography>
<Badge variant="secondary">New</Badge>
<Badge>primary</Badge>
<Badge size="lg">lg</Badge>

<Typography size="headline4">Breadcrumb</Typography>
<Breadcrumb>
  <BreadcrumbItem>Hello</BreadcrumbItem>
  <BreadcrumbItem href="#">World</BreadcrumbItem>
  <BreadcrumbItem active>123</BreadcrumbItem>
</Breadcrumb>

<Typography size="headline4">Button</Typography>
<Button class="m-2" variant="secondary">Secondary</Button>
<Button class="m-2" size="sm" variant="accent">Small</Button>
<Button class="m-2" wide>wide</Button>

<ButtonGroup class="m-2" size="lg">
  <Button>Easy</Button>
  <Button active>Medium</Button>
  <Button>Hard</Button>
</ButtonGroup>

<Typography size="headline4">Input Number</Typography>
<Input type="number" bind:value={inputNumber} />

<Typography size="headline4">Carousel</Typography>
<Carousel buttons indicators class="max-w-md" center>
  <Button
    slot="prev-btn"
    size="sm"
    variant="neutral"
    class="border-opacity-60 bg-opacity-50"
    circle
  >
    <Icon icon="fa-solid:angle-left" />
  </Button>
  <Button
    slot="next-btn"
    size="sm"
    variant="neutral"
    class="border-opacity-60 bg-opacity-50"
    circle
  >
    <Icon icon="fa-solid:angle-right" />
  </Button>

  {#each iamges as image}
    <CarouselItem>
      <img class="max-w-sm" alt="carousel" src="/small/img-{image}.jpg" />
    </CarouselItem>
  {/each}
</Carousel>
<Button
  on:click={() => {
    iamges = [3, 4, 5];
  }}>remove</Button
>
<Button
  on:click={() => {
    iamges = [4, 5, 6, 7];
  }}>add</Button
>
<Button
  loading
  on:click={() => {
    iamges = [4, 5, 6, 7];
  }}>loading</Button
>

<Typography size="headline4">Card</Typography>
<div class="flex w-full space-x-2 space-y-2 items-center flex-col sm:flex-row">
  <Card class="w-full max-w-sm">
    <CardBody>
      <CardTitle>Card Title</CardTitle>

      Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias corporis
      sit consequuntur doloribus vero unde facilis iste accusamus commodi
      similique. Assumenda exercitationem incidunt blanditiis fuga
      necessitatibus recusandae aliquam amet doloribus.
      <CardActions>
        <div>Action 1</div>
        <div>Action 2</div>
      </CardActions>
    </CardBody>
  </Card>
  <Divider vertical>VS</Divider>

  <Card shadow>
    <img class="max-w-sm" src="/small/img-1.jpg" alt="test" />
    <CardBody>
      <CardTitle>Another Card</CardTitle>
      this is content of card
      <CardActions>
        <div>Action</div>
      </CardActions>
    </CardBody>
  </Card>
</div>
<Divider />

<Typography size="headline4">Countdown</Typography>
<Countdown
  class="p-6 m-4 bg-gray-900 rounded-box shadow text-neutral-content"
  value={count}
/>

<Typography size="headline4">Collapse</Typography>
<div class="flex items-start p-2 space-x-2">
  <div>
    <Collapse arrow>
      <svelte:fragment slot="title">Title of collapse</svelte:fragment>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem soluta,
      libero nemo dignissimos fugiat error nisi nostrum molestiae esse aliquam. Eveniet
      praesentium eum nisi officiis recusandae, error facilis! Necessitatibus, quo.
    </Collapse>
    <Collapse arrow>
      <svelte:fragment slot="title">Title of collapse</svelte:fragment>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem soluta,
      libero nemo dignissimos fugiat error nisi nostrum molestiae esse aliquam. Eveniet
      praesentium eum nisi officiis recusandae, error facilis! Necessitatibus, quo.
    </Collapse>
    <Collapse arrow>
      <svelte:fragment slot="title">Title of collapse</svelte:fragment>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem soluta,
      libero nemo dignissimos fugiat error nisi nostrum molestiae esse aliquam. Eveniet
      praesentium eum nisi officiis recusandae, error facilis! Necessitatibus, quo.
    </Collapse>
  </div>
  <Collapse plus click>
    <svelte:fragment slot="title">Title of collapse</svelte:fragment>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem soluta,
    libero nemo dignissimos fugiat error nisi nostrum molestiae esse aliquam. Eveniet
    praesentium eum nisi officiis recusandae, error facilis! Necessitatibus, quo.
  </Collapse>
</div>

<Button on:click={() => (drawerOpen = true)}>Open Drawer</Button>
<Drawer hover position="right" bind:show={drawerOpen}>
  This should open from right side
</Drawer>

<Typography size="headline4">Dropdown</Typography>
<Dropdown position="right" end class="w-32">
  <svelte:fragment slot="title">Dropdown</svelte:fragment>
  <Menu>
    <MenuItem>
      <Icon slot="prefix" icon="fa-solid:user" />
      Item 1
    </MenuItem>
    <MenuItem>Item 2</MenuItem>
    <MenuItem>Item 3</MenuItem>
  </Menu>
</Dropdown>

<Typography size="headline4">Image</Typography>
<Image rounded shadow src="/small/img-4.jpg" alt="something" />

<Typography size="headline4">Link</Typography>
<Link hover href="#">top</Link>

<Typography size="headline4">Map</Typography>
<!-- <GoogleAutoComplete on:change={console.log} /> -->
<!-- <GoogleMap /> -->

<Typography size="headline4">Menu</Typography>
<Menu class="m-2 w-80" rounded compact>
  <MenuTitle>first</MenuTitle>
  <MenuItem iconOnly>
    <Icon slot="prefix" icon="fa-solid:cog" />
    Item 1
  </MenuItem>
  <MenuItem>
    <Icon slot="prefix" icon="fa-solid:cog" />
    Item 2
  </MenuItem>
  <MenuTitle>second</MenuTitle>
  <MenuItem>Item 3</MenuItem>
  <MenuItem>Item 4</MenuItem>
  <MenuItem>Item 5</MenuItem>
</Menu>

<Typography size="headline4">Modal</Typography>
<Button on:click={() => (modalOpen = true)}>Open Modal</Button>
<Modal bind:open={modalOpen}>
  Lorem, ipsum dolor sit amet consectetur adipisicinde leniti animi, ducimus
  provident quis. At fugit votate moll iquid molestias ipsam sed vel beatae
  optio ducimus.
  <ModalActions center>
    <Button on:click={() => (modalOpen = false)}>Close</Button>
  </ModalActions>
</Modal>

<Typography size="headline4">Pagination</Typography>
<Pagination variant="secondary">
  <PaginationItem>Prev</PaginationItem>
  <PaginationItem>1</PaginationItem>
  <PaginationItem>2</PaginationItem>
  <PaginationItem active>3</PaginationItem>
  <PaginationItem>4</PaginationItem>
  <PaginationItem>Next</PaginationItem>
</Pagination>

<Card class="w-1/2 mx-auto">
  <CardHeader>Form Example</CardHeader>
  <CardBody>
    <Form action="#">
      <FormInput name="name" label="name" bind:value={formFormInputValue} />
      <FormInput name="email" label="email" bind:value={formInputEmailValue} />
      <Button class="mt-4" type="submit">Submit</Button>
    </Form>
  </CardBody>
</Card>

<div class="p-4">
  <Card>
    <CardHeader>Form Inline Example</CardHeader>
    <CardBody>
      <Form inline action="#">
        <FormInput label="name" bind:value={formFormInputValue} />
        <FormInput label="email" bind:value={formInputEmailValue} />
        <Button type="submit">Submit</Button>
      </Form>
    </CardBody>
  </Card>
</div>

<Typography size="headline4" class="typography-headline4">Popover</Typography>
<Button id="pop-target">Open</Button>
<Popover hover target="pop-target">
  <div>Hello from Popover</div>
</Popover>

<Form>
  <FormGroup id="email" name="email">
    <Label>Email:</Label>
    <Input variant="success" type="email" />
  </FormGroup>
  <FormGroup id="email" name="email">
    <Label>Email:</Label>
    <Input variant="accent" bordered type="email" />
  </FormGroup>
  <FormGroup id="email" name="email">
    <Label>Email:</Label>
    <Input size="xs" variant="error" type="email" />
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
    <Label>Checks:</Label>
    <CheckboxGroup
      inline
      size="xs"
      options={["Item 1", "Item 2", "Item 3", "Item 4"]}
    />
  </FormGroup>
  <FormGroup>
    <Label>Radio Buttons:</Label>
    <RadioGroup
      inline
      name="radios"
      options={["option 1", "option 2", "option 3"]}
    />
  </FormGroup>
  <FormGroup>
    <Label>Enter some text:</Label>
    <TextArea variant="error" />
  </FormGroup>

  <Toggle size="xs">Toggle 1</Toggle>
  <Toggle variant="secondary">Toggle 2</Toggle>
  <Toggle variant="accent">Toggle 3</Toggle>

  <FormGroup>
    <Label>Range:</Label>
    <Range value="50" />
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
</Form>

<Typography size="headline4">Spinner</Typography>
<Spinner />
<Spinner variant="error" size="xs" />

<Typography size="headline4">Stack</Typography>
<Stack>
  <div class="w-96 h-64 bg-gray-800 text-white text-2xl">3</div>
  <div class="w-96 h-64 bg-gray-800 text-white text-2xl">2</div>
  <div class="w-96 h-64 bg-gray-800 text-white text-2xl">1</div>
</Stack>

<Typography size="headline4">Table</Typography>

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

<Typography size="headline4">Step</Typography>
<Steps>
  <Step variant="primary">First</Step>
  <Step variant="accent">Second</Step>
  <Step variant="accent">Third</Step>
  <Step variant="accent">Fourth</Step>
  <Step>Fifth</Step>
</Steps>

<Typography size="headline4">Tab</Typography>

<TabContent bordered>
  <TabPane name="first">Hello World!</TabPane>

  <TabPane name="second">Second Tab</TabPane>

  <TabPane disabled name="disabled">You can't see this text</TabPane>

  <TabPane name="third">another Tab</TabPane>
</TabContent>

<Typography size="headline4">Tooltip</Typography>
<Tooltip text="Hello World!">
  <Button>Tooltip</Button>
</Tooltip>

<Typography size="headline4">Progress</Typography>

<Progress value={40} />
<Progress variant="accent" value={90} />

<Typography size="headline4">Icon</Typography>

<Typography size="headline3">
  <Icon icon="mdi:alarm" />
  <Icon color="black" class="text-red-800" icon="bx:bxs-dashboard" />
  <Icon class="text-blue-800" icon="uil:dashboard" />
  <Icon color="red" class="text-gray-800" icon="bx:bxs-ambulance" />
  <Icon class="text-indigo-400" icon="bx:bx-hotel" />
</Typography>
<Typography class="text-green-800 !text-3xl">
  Hello World! <Icon width="2em" height="2em" inline icon="fa-solid:cog" />
</Typography>

<div class="p-4 bg-gray-200 text-red-600">Svelte App</div>

<style>
  :global(.typography-headline4) {
    font-size: 16px;
    font-weight: 600;
    margin-top: 20px;
  }

  :global(.custom-avatar) :global(.ubeac-avatar-text) {
    background-color: red;
  }

  :global(.custom-avatar) {
    padding: 4px;
  }

  :global(.ubeac-avatar) :global(.ubeac-avatar-image) {
    filter: blur(4px);
  }
  
  :global(.hover-border) {
    transition: all 0.2s ease;
  }

  :global(.hover-border):hover {
    border: 1px solid blue !important;
  }

  :global(.ubeac-card):hover {
    border: 1 px solid black;
  }
</style>
