const telegraf = require("./config/telegraf")
const tx = require("./handlers/subscribeTx")
const coinmarketCap = require("./handlers/coinmarkrtCap")
const help = require("./handlers/help")

const bot = telegraf.bot


bot.launch()