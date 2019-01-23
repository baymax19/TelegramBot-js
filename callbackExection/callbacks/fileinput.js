const fs = require("fs")
function readFile(){
	fs.readFile("./fileinput.js",function(err,result){
	if (err){console.log(err);}
	else	
		console.log(result.toString())
	})
}
readFile()
