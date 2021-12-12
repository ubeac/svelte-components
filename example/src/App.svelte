<script>
     import Alert from './components/Alert.svelte'
     import Card from './components/Card.svelte'
     import {Avatar, AvatarGroup} from '@ubeac/svelte-components'
     import { Badge } from '@ubeac/svelte-components'
     import {Breadcrumb, BreadcrumbItem} from '@ubeac/svelte-components'
     import {Carousel, CarouselItem} from '@ubeac/svelte-components'

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


<h1 class="text-lg m-2">Carousel</h1>
<Carousel class="max-w-md" center>
     {#each Array.from({length: 7}).fill(0) as item, index}
          <CarouselItem class="m-1 rounded-box shadow overflow-hidden">
               <img class="max-w-sm" alt="carousel {index}" src="/example/images/small/img-{index+1}.jpg">
          </CarouselItem>
     {/each}

</Carousel>


<div class="p-4 bg-gray-200 text-red-600">Svelte App</div>