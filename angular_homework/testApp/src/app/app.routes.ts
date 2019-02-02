import { Routes, RouterModule } from "@angular/router";
import { UsersComponent } from "./users/users.component";
import { UserdetailsComponent } from "./users/userdetails.component";

const routes: Routes = [
  { path: "users", component: UsersComponent },
  {
    path: "users/:id",
    component: UserdetailsComponent
  }
];

export const myRoutes = RouterModule.forChild(routes);
