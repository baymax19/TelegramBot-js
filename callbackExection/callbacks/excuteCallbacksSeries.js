const fs = require("fs");
const axios = require("axios");
const aseries = require("async");

//const tasks =[
	function getData(username,cb){
		axios.get( `https://api.github.com/users/${username}`).
		then((data)=>(cb(data))).catch((e)=>console.log(e));	
	}
//];

//aseries.series(tasks,function(data){
//	console.log(data);
//});

getData("baymax19",(data)=> console.log(data));
