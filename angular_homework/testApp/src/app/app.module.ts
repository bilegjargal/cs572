import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CounterComponent } from "./homework_11/counter.component";
import { SmartComponent } from "./homework_12/smart.component";
import { DumbComponent } from "./homework_12/dumb.component";

@NgModule({
  declarations: [AppComponent, CounterComponent, SmartComponent, DumbComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
