const telegraf = require("./config/telegraf")
const tx = require("./handlers/subscribeTx")
const bot = telegraf.bot

bot.launch()