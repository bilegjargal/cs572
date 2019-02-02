import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UsersComponent } from "./users.component";
import { myRoutes } from "../app.routes";
@NgModule({
  declarations: [UsersComponent],
  imports: [CommonModule, myRoutes]
})
export class UsersModule {}
