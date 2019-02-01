import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-counter",
  template: `
    <button (click)="decreaseVal()">-</button> {{ counterValue }}
    <button (click)="increaseVal()">+</button>
  `,
  styles: []
})
export class CounterComponent implements OnInit {
  @Input("counter") counterValue: number;
  @Output() counterChanged = new EventEmitter();

  decreaseVal() {
    this.counterValue--;
    this.counterChanged.emit(this.counterValue);
  }
  increaseVal() {
    this.counterValue++;
    this.counterChanged.emit(this.counterValue);
  }
  ngOnInit() {}
}
