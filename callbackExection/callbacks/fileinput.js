const fs = require("fs")
const as = require("async")
//function readFile(){
//	fs.readFile("./fileinput.js",function(err,result){
//	if (err){console.log(err);}
//	else	
//		console.log(result.toString())
//	})
//}
//readFile()
let list =[
"./callback1.js",
"./customCallback.js",
"./fileinput.js"
];

as.each(list, function(file,cb){
	fs.readFile(file,  (err,data)=>{
		if (err){ console.log(err);}
		else{
			console.log(data.toString())
			}
			cb();
	});	
},
function(err){
	console.log("all done",err)
});


