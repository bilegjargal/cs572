import { Directive, Input, HostBinding, OnInit } from "@angular/core";

@Directive({
  selector: "[appIsVisible]"
})
export class IsVisibleDirective implements OnInit {
  @Input() isVisible = true;
  @HostBinding("style.display") visibility;

  ngOnInit(): void {
    this.visibility = this.isVisible == true ? "visible" : "hidden";
  }
  constructor() {}
}
