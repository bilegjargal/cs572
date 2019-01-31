import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-smart",
  template: `
    <app-dumb
      appIsVisible="true"
      appIsLoggable="true"
      [itemList]="itemList"
    ></app-dumb>
  `,
  styles: []
})
export class SmartComponent implements OnInit {
  @Input() itemList;
  constructor() {}
  ngOnInit() {}
}
