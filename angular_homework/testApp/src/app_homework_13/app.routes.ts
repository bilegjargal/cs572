import { Routes, RouterModule } from "@angular/router";
import { UsersComponent } from "./users/users.component";
import { UserdetailsComponent } from "./users/userdetails.component";
import { UserNotFoundGuard } from "./user-not-found.guard";

const routes: Routes = [
  { path: "users", component: UsersComponent },
  {
    path: "users/:id",
    component: UserdetailsComponent,
    canActivate: [UserNotFoundGuard]
  },
  {
    path: "**",
    component: UserNotFoundGuard
  }
];

export const myRoutes = RouterModule.forChild(routes);
