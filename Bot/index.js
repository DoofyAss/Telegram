


require('../handler')

process.removeAllListeners('warning')

const Telegram = require('node-telegram-bot-api')

const bot = new Telegram(process.env.token, {

	polling: { interval: 300, autoStart: true }
})










bot.on('text', message => {

	const { message_id: id, from: { first_name }, chat: { id: chat } } = message

	bot.sendMessage(message.chat.id, `hi ${ first_name }`,
	{ reply_to_message_id: id })
})
