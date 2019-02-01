import { Component, OnInit } from "@angular/core";

//Only current homework exercises are uncommented,
//others are commented.
//If you want to test previous homeworks, uncomment lines
//you want to execute.

@Component({
  selector: "app-root",
  template: '<app-smart [itemList]="itemList"></app-smart>',
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  itemList = ["one", "two", "three", "four", "five"];

}
