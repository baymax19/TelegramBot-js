const rp = require("request-promise").defaults({family:4})

const telegraf = require("../config/telegraf")

const bot = telegraf.bot
const chain_ids = telegraf.chat_ids

bot.command("symbol",(ctx)=>{
    let symbol = ctx.message.text.split(" ")
    const requestOptions = {
        method: "GET",
        uri : `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=${symbol[1]}`,
        headers:{
            'X-CMC_PRO_API_KEY': 'YOUR API KEY',
        },
        json: true,
        gzip : true
    };

    rp(requestOptions).then(response =>{
    
        token = response["data"][`${symbol[1]}`]
        ctx.replyWithHTML('Name : '+'<b>'+token["name"]+'</b>'+ '\n'+'Symbol : '+'<b>'+token["symbol"]+'</b>'+ '\n'+'PriceinUSD : '+'<b>'+token["quote"]["USD"]["price"]+'</b>')
    
    }).catch((err)=>{
        ctx.reply(err.message)
    })

})

