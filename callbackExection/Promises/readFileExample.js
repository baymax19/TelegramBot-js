const fs = require("fs")
const getFile = () =>{
	return new Promise(function(resolve,reject){
		fs.readFile("./apiExample.js","utf8",function(err,data){
			if (err){ reject}
			else {resolve(data)}
		});	
	});
};
getFile().then((data)=>console.log(data))
