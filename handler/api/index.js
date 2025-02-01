


const EventEmitter = require('events')



class Telegram extends EventEmitter {



	constructor() {

		super()

		this.offset = 0
	}



	auth(token) {

		this.api = `https://api.telegram.org/bot${ token }/`

		this.request('getMe')

		.then(e => {

			Object.assign(this, e)
			this.emit('start')

			this.polling()
		})

		.catch(e => console.log('Authentication failed'))
	}



	request(method, query = {}) {

		let params = '?' + new URLSearchParams(query).toString()

		return new Promise((resolve, reject) => {

			fetch(this.api + method + params)

			.then(result => result.json())

			.then(json => json.ok ? resolve(json.result) : reject(json.description))

			.catch(reject)
		})
	}



	polling() {

		this.request('getUpdates', { timeout: 60, offset: this.offset })

		.then(e => {

			e.forEach(update => {

				this.emit('update', update)
				this.offset = update.update_id + 1
			})

			this.polling()
		})

		.catch(e => setTimeout(() => this.polling(), 30000))
	}
}



module.exports = { Telegram }
