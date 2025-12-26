import { Directive } from "@angular/core";
import { HlmInput, inputVariants } from "@/shared/ui/input";
import { classes } from "@/shared/ui/utils";

@Directive({
  selector: "input[hlmSidebarInput]",
  host: {
    "data-slot": "sidebar-input",
    "data-sidebar": "input",
  },
})
export class HlmSidebarInput extends HlmInput {
  constructor() {
    super();
    classes(() => [
      inputVariants({ error: this._state().error }),
      "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
    ]);
  }
}
