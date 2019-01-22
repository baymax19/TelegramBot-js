const a = require("axios")
const getData = (username) => {
	return new Promise(function(resolve,request){
	a.get( `https://api.github.com/users/${username}`)
	.then((res)=> console.log(res)).catch((e)=> console.log(e))
	});
	if (data){ resolve()}
	else reject()
}

getData("baymax19").then((data)=>console.log(data)).catch((e)=> console.log()) 
