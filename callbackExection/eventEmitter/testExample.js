const EventEmitter = require("events").EventEmitter;
let chatRoom = new EventEmitter;


let name = "username"
function login(a){
	chatRoom.emit("userJoied",name+a)
}
function userJoined(username){
	console.log("User "+username+" Added");
};
chatRoom.on("userJoied",userJoined);
login("test");

chatRoom.removeListener("userJoied",userJoined)
login("test");
