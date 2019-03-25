const WebSocket = require("ws");

const telegraf = require("../config/telegraf")

const chat_ids = telegraf.chat_ids;
const bot = telegraf.bot;

const url = "ws://localhost:26657/websocket";
const connection = new WebSocket(url);

connection.onopen = () => {
    let request = `{"method":"subscribe", "id":"dontcare","jsonrpc":"2.0","params":["tm.event='Tx'"]}`;
    connection.send(request);
}

connection.onmessage = (message) => {
    data = JSON.parse(message.data)

    if (data["result"]["query"]== "tm.event='Tx'") {
        log = JSON.parse(data["result"]["data"]["value"]["TxResult"]["result"]["log"])
  
        if (log[0]["success"]) { 
            chat_ids.forEach((id, index, array)=>{
                bot.telegram.sendMessage(id,"New Tx is added in Chain");
            })
            
         
        }
    }
}

connection.onerror = (error) => {
    console.log(error)
}