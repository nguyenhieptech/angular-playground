import { Directive } from "@angular/core";
import { classes } from "@/shared/ui/utils";

@Directive({
  selector: "[hlmButtonGroupText],hlm-button-group-text",
})
export class HlmButtonGroupText {
  constructor() {
    classes(
      () =>
        "flex items-center gap-2 rounded-md border bg-muted px-4 text-sm font-medium shadow-xs [&_ng-icon]:pointer-events-none [&_ng-icon:not([class*='text-'])]:text-base"
    );
  }
}
