crunchNumber(postMessage)
debugger;
function crunchNumber(progressCall){
    for(let i=1;i<10;i++){
        progressCall(i*10);
        workUntil= Date.now()+ 1*1000;
        while(Date.now()< workUntil){}
    }
}