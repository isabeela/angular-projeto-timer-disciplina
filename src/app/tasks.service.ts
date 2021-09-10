import { Injectable } from "@angular/core";
import { LoggerService } from "./logger.service";

interface Task {
  title: string;
}

interface Disci {}

@Injectable()
export class TasksService {
  list: Array<Task> = [];
  listd: Array<Disci> = [
    "Desenvolvimento para Dispositivos Móveis",
    "Projetos de Prototipagem",
    "Desenvolvimento para Servidores",
    "Tópicos Especiais em Sistemas para Internet",
    "Inglês V",
    "TTG",
    "Marketing"
  ];

  constructor(private Logger: LoggerService) {
    this.Logger.add("TasksService started");
  }

  getList() {
    return this.list;
  }

  add(title: string) {
    this.list.push({ title });
  }

  remove(index: number) {
    this.list.splice(index, 1);
  }

  getListd() {
    return this.listd;
  }
}
