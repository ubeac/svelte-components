<script>
     import Alert from './components/Alert.svelte'
     import Card from './components/Card.svelte'
     import { Badge } from '@ubeac/svelte-components'

</script>

<Alert />
<Card />
<h1 class="text-lg m-2">Badge</h1>
<Badge variant="secondary">New</Badge>
<Badge>prima ry</Badge>
<Badge size="lg">lg</Badge>
<div class="p-4 bg-gray-200 text-red-600">Svelte App</div>