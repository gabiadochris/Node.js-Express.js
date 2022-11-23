const EvenEmitter = require("events");

const customEmitter = new EvenEmitter();

//on - listen for an event
//emit - emit an event

customEmitter.on("response", (name, id) => {
  console.log(`data recieved ${name} with id ${id}`);
});

customEmitter.emit("response", "John ", 34);
