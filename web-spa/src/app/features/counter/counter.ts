import { Component, signal } from "@angular/core";
import { HlmButtonImports } from "@/shared/ui/button";

@Component({
  selector: "app-counter",
  templateUrl: "./counter.html",
  imports: [HlmButtonImports],
})
export class CounterComponent {
  counter = signal(0);

  increment() {
    this.counter.update((value) => value + 1);
  }

  decrement() {
    this.counter.update((value) => value - 1);
  }

  reset() {
    this.counter.set(0);
  }

  resetTo(value: number) {
    this.counter.set(value);
  }
}
