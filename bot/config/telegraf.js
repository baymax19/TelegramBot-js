const Telegraf = require("telegraf");
const session = require("telegraf/session")

const bot = new Telegraf(process.env.TOKEN);

const chat_ids = [];

bot.use(session({ttl :10}));
bot.start((ctx)=>(
    ctx.reply("Hey"),
    chat_ids.push(ctx.chat.id)
))

module.exports = {
    bot : bot,
    chat_ids: chat_ids
}