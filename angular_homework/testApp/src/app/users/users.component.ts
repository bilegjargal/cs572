import { Component, OnInit } from "@angular/core";
import { DataService } from "../service/data.service";

@Component({
  selector: "app-users",
  template: `
    <ul>
      <li *ngFor="let user of userData">
        <a [routerLink]="['users', user.login.uuid]">{{ user.name.first }}</a>
      </li>
    </ul>
  `,
  styles: []
})
export class UsersComponent implements OnInit {
  constructor(private data: DataService) {}
  userData: [];
  ngOnInit() {
    if (localStorage.getItem("userdata") == null) {
      this.data.getOnlineData().subscribe(res => {
        this.userData = JSON.parse(res.results);
        localStorage.setItem("userdata", JSON.stringify(this.userData));
      });
    } else {
      this.userData = JSON.parse(localStorage.getItem("userdata"));
    }
  }
}
