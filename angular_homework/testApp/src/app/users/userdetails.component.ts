import { Component, OnInit } from "@angular/core";
import { DataService } from "../service/data.service";
import { ActivatedRoute } from "@angular/router";
import { JsonPipe } from "@angular/common";

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
    route.params.subscribe(param => {
      this.userDetail = JSON.stringify(data.getUserDetail(param.id));
    });
  }

  ngOnInit() {
    console.log("user detail rendered");
  }
}
