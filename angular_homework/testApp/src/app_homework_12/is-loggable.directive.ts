import { Directive, Input, HostListener } from "@angular/core";
import { element } from "@angular/core/src/render3";

@Directive({
  selector: "[isLoggable]"
})
export class IsLoggableDirective {
  @Input() isLoggable = "false";

  @HostListener("click", ["$event.target"]) clickListener(element) {
    if (this.isLoggable) {
      console.log(`${element.tagName} element has clicked`);
    }
    return false;
  }
  constructor() { }
}
