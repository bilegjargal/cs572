const rxjs = require("rxjs");
const os = require("os");
const Observable = require("events");

checkSystem = () => {
  console.log("Checking your system");
  os.totalmem() / 1024 / 1024 < 4000
    ? console.log("This app needs at least 4GB of RAM")
    : os.cpus().length <= 2
    ? console.log("Processor is not supported")
    : console.log("Checked successfully");
};

console.log("Checking using observable");

class CheckSystem extends Observable {
  constructor() {
    super();
  }
}
const checker = new CheckSystem();
checker.emit("check", checkSystem());
