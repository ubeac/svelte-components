export default {
	resolver: (name) => {
		let folder = 'regular'
		let filename = name

		if (name.includes('-')) {
			const splitted = name.split('-')

			if (splitted[0] === 'fab') folder = 'brand'
			if (splitted[0] === 'fas') folder = 'solid'

			splitted.shift()

			filename = splitted.join('-')
		}

		// return link to icon's svg
		return `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.1/svgs/${folder}/${filename}.svg`
	},
}
