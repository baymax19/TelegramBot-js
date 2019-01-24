const asyncLib = require("async");
const axios = require("axios");
let  username ="baymax19";
let filename = "fileinput.js"
asyncLib.series([
	function getData(cb){
		axios.get( `https://api.github.com/users/${username}`)
		.then((data)=>(cb(null,data.data)))
		.catch((e)=>(console.log(e)))
	},

	function readFile(cb){
		asyncLib.waterfall([
			function readFileAsync(cb){
				require("fs").readFile(filename,"utf8",(err,data)=>{
					cb(null,data);
				})
			}
		],(err,data)=>{
			if (err){console.log(err);}
			else{
				cb(null,data);		
				};
		})		
	},
	
	
	],(err, data)=>{
	if (err){console.log(err);}
	else{
		console.log(data);		
	};
})


//hack md : = https://hackmd.io/ehupnr72S1qvvyfNWaKKIQ
