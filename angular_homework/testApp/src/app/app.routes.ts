import { Routes, RouterModule } from "@angular/router";
import { UsersComponent } from "./users/users.component";
import { UserdetailsComponent } from "./users/userdetails.component";

const routes: Routes = [
  { path: "users", component: UsersComponent },
  { path: "users/:uuid", component: UserdetailsComponent },
  { path: "**", redirectTo: "/" }
];

export const myRoutes = RouterModule.forRoot(routes);
