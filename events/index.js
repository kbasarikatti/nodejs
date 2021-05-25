const EventEmitter = require("events");

const myEmitter = new EventEmitter();

function c1() {
  console.log("an event occurred!");
}

function c2() {
  console.log("yet another event occurred!");
}

myEmitter.on("eventOne", c1); // Register for eventOne
myEmitter.on("eventOne", c2); // Register for eventOne

myEmitter.on("status", (code, msg) => console.log(`Got ${code} and ${msg}`)); // register for status event

myEmitter.emit("eventOne");

myEmitter.emit("status", 200, "ok");
