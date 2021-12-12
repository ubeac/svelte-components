<script>
     import Alert from './components/Alert.svelte'
     import Card from './components/Card.svelte'

     import {Avatar, AvatarGroup} from '@ubeac/svelte-components'
</script>

<Alert />
<Card />
<Avatar size="sm" online label="SM"/>
<Avatar size="md" online label="MD"/>

<AvatarGroup size="lg">
     <Avatar image="/example/images/users/avatar-1.jpg" />
     <Avatar image="/example/images/users/avatar-1.jpg" />
     <Avatar image="/example/images/users/avatar-1.jpg" />
</AvatarGroup >
<div class="p-4 bg-gray-200 text-red-600">Svelte App</div>