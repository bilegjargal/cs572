const EventEmitter = require("events");

class Gym extends EventEmitter {
  constructor() {
    super();
  }
}

const boom = new Gym();
setInterval(() => boom.emit("boom"), 1000);

boom.on("boom", () => console.log("Athlete is working out"));
