const telegraf = require("./config/telegraf")
const tx = require("./handlers/subscribeTx")
const coinmarketCap = require("./handlers/coinmarkrtCap")

const bot = telegraf.bot


bot.launch()