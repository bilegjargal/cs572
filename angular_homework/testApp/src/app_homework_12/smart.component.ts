import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-smart",
  template: `
    <app-dumb isVisible=true isLoggable=true [itemList]="itemList"></app-dumb>
  `,
  styles: []
})
export class SmartComponent implements OnInit {
  @Input() itemList;
  constructor() { }
  ngOnInit() { }
}
