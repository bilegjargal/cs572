var EventEmitter = require("events");

class ComproStudent extends EventEmitter {
  constructor() {
    super();
    this.message = "hi";
  }
  visit() {
    console.log(this.message);
    this.emit("newStudent", "assa");
  }
}

var student = new ComproStudent();
student.on("newStudent", function(name) {
  console.log(`Welcome ${name}`);
});
