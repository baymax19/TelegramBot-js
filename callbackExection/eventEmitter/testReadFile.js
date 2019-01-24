const EventEmitter = require("events").EventEmitter;
let fileEmitter = new EventEmitter;

fileEmitter.on("file_read",function(filename){
	let start = new Date()
	require("fs").readFile(filename,"utf8",(err,data)=>{
		if (err){ console.log(err);}
		else{
			console.log(new Date()-start)
			console.log(data);
		}
		
	})
})

fileEmitter.emit("file_read","./testExample.js")
