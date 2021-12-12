<script>
     import Alert from './components/Alert.svelte'
     import Card from './components/Card.svelte'
     import {Breadcrumb, BreadcrumbItem} from '@ubeac/svelte-components'

</script>

<Alert />
<Card />
<h1 class="text-lg m-2">Breadcrumb</h1>
<Breadcrumb>
     <BreadcrumbItem>Hello</BreadcrumbItem>
     <BreadcrumbItem>World</BreadcrumbItem>
     <BreadcrumbItem active>123</BreadcrumbItem>
</Breadcrumb>
<div class="p-4 bg-gray-200 text-red-600">Svelte App</div>