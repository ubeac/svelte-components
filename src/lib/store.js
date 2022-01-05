import { writable } from 'svelte/store';

export let layoutSettings = writable({
  sidebarMode: 'open',  // open | close | mini
  navbarMode: 'wide',  // wide | tight
  navbarColor: 'neutral',  // base | neutral | primary
})
