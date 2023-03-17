const { Telegraf } = require('telegraf');
const { message } = require('telegraf/filters');

const BOT_TOKEN = "1594944965:AAE5rJwRwx87Q_MSCf-SwA8LgKXgesdccv0"

const bot = new Telegraf(BOT_TOKEN);
bot.start((ctx) => ctx.reply('Welcome'));
bot.help((ctx) => ctx.reply('Send me a sticker'));
bot.on(message('sticker'), (ctx) => ctx.reply('👍'));
bot.hears('hi', (ctx) => ctx.reply('Hey there'));
bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));