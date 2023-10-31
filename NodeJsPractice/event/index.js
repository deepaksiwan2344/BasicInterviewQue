
// EventEmitter is a class in Node.js that provides a way to handle events and callbacks. 
// It allows developers to create and listen to custom events in their applications.



const EventEmitter = require("events");
const event = new EventEmitter();

console.log("Event", event.on())


event.on("sayMyName", () => {
  console.log("deepak kumar, How are you?");
});

event.on("sayMyName", ()=>{
    console.log("Heloo")
})
event.emit("sayMyName");
