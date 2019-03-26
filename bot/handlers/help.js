const telegraf = require("../config/telegraf")

const bot = telegraf.bot

bot.command("help",(ctx)=>{
    ctx.replyWithHTML('This bot contatins the two diffrent Modules \n 1. <b> CoinMarketCap Coins list </b> \n Usage : /symbol {SYMBOL} \n 2. <b> Tendermint Subscribe Event  </b> \n Usage : /start  \n Description : When you start the bot It will start to subscribe the event ot Tx ')
})