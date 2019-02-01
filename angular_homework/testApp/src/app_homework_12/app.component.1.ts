import { Component, OnInit } from "@angular/core";
import { DataService } from './service/data.service';

//Only current homework exercises are uncommented,
//others are commented.
//If you want to test previous homeworks, uncomment lines
//you want to execute.

@Component({
  selector: "app-root",
  template:
    "<app-counter [counter] = 'counter' (counterChanged)='onCounterChanged($event)'> </app-counter>",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {

  constructor(private dataService: DataService) {

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log("getOnline data");
    this.dataService.getOnlineData();
  }

}
