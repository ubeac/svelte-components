<script>
     import Alert from './components/Alert.svelte'
     import {Avatar, AvatarGroup} from '@ubeac/svelte-components'
     import { Badge } from '@ubeac/svelte-components'
     import {Breadcrumb, BreadcrumbItem} from '@ubeac/svelte-components'
     import {Button, ButtonGroup} from '@ubeac/svelte-components'
     import {Card, CardTitle, CardActions } from '@ubeac/svelte-components'
     import {Divider} from '@ubeac/svelte-components'

</script>

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

<div class="p-4 bg-gray-200 text-red-600">Svelte App</div>