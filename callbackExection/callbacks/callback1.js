let a  =[1,2,3,"1","@","@","1",1,4,5];
first(a,function(data){
	console.log("data digit is "+data);
});
function first(arr,cb){
	cb(arr[0])
};

last(a,function(data){
	console.log(data);
});

function last(arr,cb){
	cb(arr[arr.length-1]);
};


multiply(3,4,function(data){
	console.log(data);
});

function multiply(a,b,cb){
	cb(a*b);
};

contains(a,"4",function(result){	
	if (result){console.log("exist");}
	else {console.log("not exist");}
});

function contains(a,b,cb){
	cb(a.find((data)=>data ==b));
};

// To find the Unique elements in the array, using ES6 filtes and Set function
uniq(a,function(data){
	console.log("unique array "+data);
});


function uniq(array,cb){
	cb(array.filter((x,i,a)=>a.indexOf(x)==i))
};



