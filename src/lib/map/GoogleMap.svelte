<script lang="ts">
	import { onDestroy, onMount } from 'svelte'

	type Coordinate = {
		latitude: number
		longitude: number
	}

	export let center: Coordinate = {
		latitude: 0,
		longitude: 0,
	}

	export let connect = false

	export let draggable = false

	export let height = '250px'

	// export let multiple = false

	export let readonly = false

	export let value: Coordinate | [] = {
		latitude: 0,
		longitude: 0,
	}

	export let zoom = 8

	let element,
		map,
		values = [],
		polygon

	$: update('center', center)
	$: update('value', value)
	$: update('zoom', zoom)

	const fromModel = (input) => {
		return {
			lat: input.latitude,
			lng: input.longitude,
		}
	}

	const toModel = (input) => {
		return {
			latitude: input.lat,
			longitude: input.lng,
		}
	}

	const init = () => {
        if (!window['google']?.maps) {
			throw new Error(
				'Please add google map script in <head> section. please check https://githbub.com/ubeac/svelte-components for more information'
			)
		}

		map = new window['google'].maps.Map(element, {
			center: fromModel(center),
			zoom,
		})

        console.log(map)
		polygon = new window['google'].maps.Polygon({
			map,
			fillOpacity: 0,
			strokeColor: 'rgb(10, 123, 189)',
			strokeWeight: 3,
		})
		map.addListener('click', onClick)
		map.addListener('center_changed', onCenterChanged)
		map.addListener('zoom_changed', onZoomChanged)
	}

	const destroy = () => {
        console.log("map.unbindAll()")
		// map.unbindAll()
	}

	const addMarker = (position) => {
		const marker = new window['google'].maps.Marker({
			map,
			draggable,
			position,
			icon: !connect
				? undefined
				: {
						url: 'https://cdn.tourradar.com/images/responsive/tour/destination-map-new.svg',
						anchor: new window['google'].maps.Point(10.34 / 2, 10.34 / 2),
				  },
		})
		if (connect) polygon.getPath().push(marker.position)
		return marker
	}

	const removeMarker = (marker) => {
		marker?.setMap(null)
	}

	const update = (key, input) => {
		if (!map) return
		switch (key) {
			case 'center': {
				if (!input || !input.latitude || !input.longitude) break
				const before = map.getCenter().toJSON()
				if (input.latitude === before.lat && input.longitude === before.lng) break
				const next = fromModel(input)
				map.setCenter(next)
				break
			}
			case 'value': {
				if (!input) break
				values.forEach(removeMarker)
				values = [input].flat().map(fromModel).map(addMarker)
				break
			}
			case 'zoom': {
				if (input === map.getZoom()) break
				map.setZoom(input)
				break
			}
		}
	}

	const onClick = (event) => {
		if (readonly) return
		const marker = addMarker(event.latLng)
		const model = toModel(marker.position.toJSON())
		// TODO: enable multiple values
		// if (multiple) {
		// 	// value = value || []
		// 	// value.push(model)
		// } else {
		value = model
		values.forEach(removeMarker)
		// }
		values.push(marker)
	}

	const onCenterChanged = () => {
		center = toModel(map.getCenter().toJSON())
	}

	const onZoomChanged = () => {
		zoom = map.getZoom()
	}

	onMount(init)

	onDestroy(destroy)
</script>

{#if !map}
    <div {...$$restProps} style="height: 36px;" class="map w-full flex items-center justify-center">
        Unable to create Map (https://github.com/ubeac/svelte-components/issues/new)
    </div>
{/if}
<div {...$$restProps} style="height: {height}" class="map" bind:this={element} />

<style>
	.map {
		width: 100%;
		height: 100%;
	}
</style>
