import { Component } from "@angular/core";
import { HlmButtonImports } from "@/shared/ui/button";
import { HlmCardImports } from "@/shared/ui/card";
import { HlmCheckboxImports } from "@/shared/ui/checkbox";
import { HlmInputImports } from "@/shared/ui/input";
import { TodoStore } from "./todo.store";

@Component({
  selector: "app-todo",
  standalone: true,
  imports: [HlmButtonImports, HlmCardImports, HlmCheckboxImports, HlmInputImports],
  template: `
    <div class="flex min-h-screen items-center justify-center bg-background">
      <section hlmCard class="w-full max-w-md">
        <!-- Header -->
        <header hlmCardHeader>
          <h1 hlmCardTitle>Todos</h1>
        </header>

        <!-- Content -->
        <div hlmCardContent class="space-y-4">
          <!-- Input -->
          <input
            hlmInput
            placeholder="Add a new todo"
            (keydown.enter)="handleAdd($event)"
          />

          <!-- Todo List -->
          <ul class="space-y-2">
            @for (todo of store.todos(); track todo.id) {
              <li class="flex items-center gap-3 rounded-md border p-2">
                <hlm-checkbox
                  [checked]="todo.done"
                  (checkedChange)="store.toggle(todo.id)"
                />

                <span
                  class="flex-1 text-sm"
                  [class.line-through]="todo.done"
                  [class.text-muted-foreground]="todo.done"
                >
                  {{ todo.text }}
                </span>

                <button
                  hlmBtn
                  variant="ghost"
                  size="icon"
                  (click)="store.remove(todo.id)"
                >
                  ✕
                </button>
              </li>
            }
          </ul>
        </div>

        <!-- Footer -->
        <footer hlmCardFooter class="flex justify-between text-sm text-muted-foreground">
          <span>Total: {{ store.todos().length }}</span>
          <span>Completed: {{ store.completed().length }}</span>
        </footer>
      </section>
    </div>
  `,
})
export class TodoPage {
  store = new TodoStore();

  handleAdd(e: Event) {
    const input = e.target as HTMLInputElement;
    const value = input.value.trim();
    if (!value) return;

    this.store.add(value);
    input.value = "";
  }
}
