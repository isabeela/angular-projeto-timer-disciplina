import { Component, VERSION } from "@angular/core";
import { TimerService } from "./timer.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Timer e Disciplinas";

  constructor(public timer: TimerService) {
    this.timer.start(1000);
  }
}
