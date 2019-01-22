//const fs = require("fs")
const request = require("request")
//const readFile = () =>{
//	return new Promise( function(resolve,reject){
//			fs.readFile("./index.html",'utf8',function(err,res){
//				if (err) reject(err)
//				else resolve(res)
//			})	;
//	});
//};

////readFile().then((data) => console.log(data)).catch((e)=>console.log(e))
//console.log(readFile())

//const data = [
//{
//	a:1,
//	b:"string",
//	c:12.04
//},
//{
//	a:2,
//	b:"string2",
//	c:12.042
//}
//]
//const getData = () =>{
//	return new Promise(function (resolve,reject){
////		const user = data.find((data1)=>data1.a == id)
////		if(user) {resolve(user)}
////		else reject("Id not Exist")
////	})
//	if (data) {resolve(data)}
//	else	reject("dict not found")
//})
//}


////getData().then((a)=>console.log(data.find((a)=>a.a == 2))).catch((e)=>console.log(e)
//console.log(getData())

// ***********  Promise to get the data from the URL 


const userDetails = (username) =>{
	return new Promise(function(resolve,reject){
		user = request.get({url : `https://api.github.com/users/${username}`,  headers : { "User-Agent" : "request" } },function(err,res,body){
			if (err){reject(err);}
			else
				resolve(JSON.parse(body));
		});
	});
};

userDetails("bitsndbyts").then((data)=>{
	if (data.login === "baymax19")
			return data
}).then((data)=>  console.log(typeof(data)))




