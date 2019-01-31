import { Component } from "@angular/core";

//Only current homework exercises are uncommented,
//others are commented.
//If you want to test previous homeworks, uncomment lines
//you want to execute.

@Component({
  selector: "app-root",
  //BEGIN hw 11
  // template:
  //   "<app-counter [counter] = 'counter' (counterChanged)='onCounterChanged($event)'> </app-counter>",
  //END hw 11

  //BEGIN hw 12
  template: '<app-smart [itemList]="itemList"></app-smart>',
  //END hw 12

  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  // BEGIN homework 11
  // counter = 5;
  // title = "testApp";
  // onCounterChanged(number: number) {
  //   console.log(this.counter);
  //   this.counter++;
  // }
  // END homework 11
  itemList = ["one", "two", "three", "four", "five"];
}
