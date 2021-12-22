import defaultIcons from './defaultIcons'

let libraries = []

registerIconLibrary('default', { resolver: defaultIcons.resolver })

export function unregisterIconLibrary(name) {
	libraries = libraries.filter((l) => l.name !== name)
}

export function registerIconLibrary(name, { resolver }) {
	unregisterIconLibrary(name)

	libraries.push({ name, resolver, caches: {} })
}

export function getIconURL(name, library) {
	return libraries.find((l) => l.name === library)?.resolver(name)
}

export async function getIcon(name, library) {
	let url = getIconURL(name, library)
	// console.log('getIcon', url)
	// console.log(libraries)

	if (!url) {
		return `<div>cannot find icon ${library}.${name}</div>`
	} else {
		// get icon from cache
		// if not exists make a request
		const lib = libraries.find((l) => l.name === library)

		if (!lib.caches[name]) {
			// make request and save to caches
			const res = await fetch(url)
			if (res.ok) {
				lib.caches[name] = { svg: await res.text(), ok: true }
			} else {
				lib.caches[name] = { svg: null, ok: false }
			}
		}
		return lib.caches[name]
	}
}
