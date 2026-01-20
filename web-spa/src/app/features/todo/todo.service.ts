import { signal, computed } from "@angular/core";

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export class TodoService {
  private _todos = signal<Todo[]>([]);

  todos = this._todos.asReadonly();

  completed = computed(() => this._todos().filter((t) => t.done));

  add(text: string) {
    this._todos.update((todos) => [...todos, { id: Date.now(), text, done: false }]);
  }

  toggle(id: number) {
    this._todos.update((todos) =>
      todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  }

  remove(id: number) {
    this._todos.update((todos) => todos.filter((t) => t.id !== id));
  }
}
