


require('../handler')

const { Telegram } = require('../handler/api')

global.telegram = global.tg = global.bot = new Telegram()










bot.on('start', () => {

	process.title = bot.username
	console.ok(bot.username, 'auth success')
})










bot.on('update', update => {

	console.log(update)
})










bot.auth(process.env.token)
