import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UsersComponent } from "./users.component";
import { UserdetailsComponent } from "./userdetails.component";
import { myRoutes } from "../app.routes";
@NgModule({
  declarations: [UsersComponent, UserdetailsComponent],
  imports: [CommonModule, myRoutes]
})
export class UsersModule {}
