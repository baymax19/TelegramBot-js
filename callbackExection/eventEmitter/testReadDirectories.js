const fs = require("fs")
const util = require("util")

function read_directory(path, next){
	fs.readdir(".",function (err,files){
		let count = files.length;
		let result = {};
		files.forEach((file) => {
			fs.readFile(file,'utf8', (err,data)=>{
				if (err){console.log(err);}
				else{
				result[file] =  data.toString();
				count -- ;
//				console.log(data);
				}
				if (count <=0){next(result);}
			});
		})
	})	
	
}
//read_directory("eventEmitter",function(data){
//	console.log(data);
//	});

function parseString(str) {
    return str.replace(/\\r/g, '\r').replace(/\\n/g, '\n').replace(/\\t/g, '\t')
}

function read_directories(folders,next){
	let count = folders.length;
	let dataObj = {};
	folders.forEach((folder)=>{
		read_directory(folder,(data)=>{
			dataObj[folder] = data;
			count--;
			if (count<=0){
				next(dataObj);
			}
		})
	})
}

read_directories(["eventEmitter","callbacks"],function(data){
	console.log(data);
})
