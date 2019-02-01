import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CounterComponent } from "../app_homework_11/counter.component";
import { SmartComponent } from "../app_homework_12/smart.component";
import { DumbComponent } from "../app_homework_12/dumb.component";
import { IsVisibleDirective } from "../app_homework_12/is-visible.directive";
import { IsLoggableDirective } from "../app_homework_12/is-loggable.directive";
import { UsersModule } from '../users/users.module';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    SmartComponent,
    DumbComponent,
    IsVisibleDirective,
    IsLoggableDirective,
    UsersModule
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }