const a = require("axios")
function getData(a,cb){
	cb("data is","string");
}
getData("data",function(err, result){
	if( err){
		console.log(err)
	}
	console.log(result)
})



