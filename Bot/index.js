


const TelegramAPI = require('node-telegram-bot-api')

global.client = new TelegramAPI(require('./token'), { polling: true })




require('../handler')(async () => {

	client.info()
})




client.on('message', async message => {

	console.log( message )
})
