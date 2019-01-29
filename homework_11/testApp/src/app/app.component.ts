import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template:
    "<app-counter [counter] = 'counter' (counterChanged)='onCounterChanged($event)'> </app-counter>",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  counter = 5;
  title = "testApp";
  onCounterChanged(number: number) {
    console.log(this.counter);
    this.counter++;
  }
}
