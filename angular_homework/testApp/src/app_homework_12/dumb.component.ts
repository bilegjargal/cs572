import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-dumb",
  template: `
    <p *ngFor="let item of itemList">{{ item }}</p>
  `,
  styles: []
})
export class DumbComponent implements OnInit {
  @Input() itemList: [];
  constructor() {}
  ngOnInit() {}
}
