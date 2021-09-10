import { Component, OnInit } from "@angular/core";
import { LoggerService } from "../logger.service";
import { TasksService } from "../tasks.service";

@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.css"]
})
export class TasksComponent implements OnInit {
  constructor(
    public tasks: TasksService,
    private Logger: LoggerService,
    public disci: TasksService
  ) {
    this.Logger.add("TasksComponent constructed");
  }

  ngOnInit() {
    this.Logger.add("TasksComponent initialized");
  }
}
