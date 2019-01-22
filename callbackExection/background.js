const pr = document.getElementById("work");

var  work = new Worker("crunchNumber.js");

work.onmessage = function(data){
    pr.value = data.data;
}