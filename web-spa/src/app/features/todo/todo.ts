import { Component } from "@angular/core";
import { HlmButtonImports } from "@/shared/ui/button";
import { HlmCardImports } from "@/shared/ui/card";
import { HlmCheckboxImports } from "@/shared/ui/checkbox";
import { HlmInputImports } from "@/shared/ui/input";
import { TodoService } from "./todo.service";

@Component({
  selector: "app-todo",
  imports: [HlmButtonImports, HlmCardImports, HlmCheckboxImports, HlmInputImports],
  templateUrl: "./todo.html",
})
export class Todo {
  protected readonly todoService = new TodoService();

  protected handleAdd(e: Event) {
    const input = e.target as HTMLInputElement;
    const value = input.value.trim();
    if (!value) return;

    this.todoService.add(value);
    input.value = "";
  }
}
