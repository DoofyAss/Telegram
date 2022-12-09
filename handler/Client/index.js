


global.client = Object.assign(global.client || {})



$(client)










.add(function info() {

	let start = $.time()

	setInterval(() => {

		let memory = process.memoryUsage()

		let data = [

			$.__bot || 'Bot',
			start.left,
			$.size(memory.heapUsed)
		]

		process.title = data.join('   -   ')

	}, 1000)
})










.add(function scan(folder, collection = []) {



	const put = (mod, dir) => {

		let name = (dir || mod).split(path.sep).pop()

		collection.push({ name: name, path: mod })
	}



	fs.existsSync(folder) &&
	fs.readdirSync(folder).forEach(dir => {

		let tmp = path.join(folder, dir)

		if (fs.lstatSync(tmp).isDirectory()) {

			let index = path.join(tmp, 'index.js')
			if (fs.existsSync(index)) put(index, tmp)
		}

		if (tmp.endsWith('.js')) put(tmp)
	})



	return collection
})










.add(async function include(folder) {

	folder = path.join(require.main.path, folder)

	client.scan(folder).each(mod => {

		console.dir(`module { \x1b[33m${ mod.name }\x1b[37m }`)

		require(mod.path).each((name, context) => {

			global[name] = global[name] ?
			Object.assign( global[name], context ) : context
		})
	})
})
