import { Component, OnInit } from "@angular/core";
import { DataService } from "../service/data.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-userdetails",
  template: `
    <h4>
      User details
    </h4>
    <p>{{ userDetail }}</p>
  `,
  styles: []
})
export class UserdetailsComponent implements OnInit {
  userDetail: string;
  constructor(private data: DataService, route: ActivatedRoute) {
    this.data.getUserDetail();
  }

  ngOnInit() {}
}
