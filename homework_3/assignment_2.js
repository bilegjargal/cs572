const EventEmitter = require("events");

class Gym extends EventEmitter {
  constructor() {
    super();
    this.boom = "Athlete is working out";
  }

  boom() {
    console.log(this.message);
    this.emit("boom");
  }
}
