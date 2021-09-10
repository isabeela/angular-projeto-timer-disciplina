import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { TasksComponent } from "./tasks/tasks.component";
import { LogComponent } from "./log/log.component";
import { RouterModule } from "@angular/router";
import { TimerService } from "./timer.service";
import { TasksService } from "./tasks.service";
import { LoggerService } from "./logger.service";
import { NavbarComponent } from "./home/navbar/navbar.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "home", component: HomeComponent },
      { path: "tasks", component: TasksComponent },
      { path: "log", component: LogComponent }
    ])
  ],

  declarations: [
    AppComponent,
    HomeComponent,
    TasksComponent,
    LogComponent,
    NavbarComponent
  ],

  bootstrap: [AppComponent],
  providers: [TimerService, TasksService, LoggerService]
})
export class AppModule {}
