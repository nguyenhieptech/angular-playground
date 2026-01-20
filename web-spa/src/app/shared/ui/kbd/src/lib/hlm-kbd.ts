import { Directive } from "@angular/core";
import { classes } from "@/shared/ui/utils";

@Directive({
  selector: "kbd[hlmKbd]",
  host: {
    "data-slot": "kbd",
  },
})
export class HlmKbd {
  constructor() {
    classes(() => [
      "pointer-events-none inline-flex h-5 w-fit min-w-5 items-center justify-center gap-1 rounded-sm bg-muted px-1 font-sans text-xs font-medium text-muted-foreground select-none",
      "[&_ng-icon:not([class*='text-'])]:text-xs",
      "[[data-slot=tooltip-content]_&]:bg-background/20 [[data-slot=tooltip-content]_&]:text-background dark:[[data-slot=tooltip-content]_&]:bg-background/10",
    ]);
  }
}
