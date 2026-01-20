import { Directive } from "@angular/core";
import { classes } from "@/shared/ui/utils";

@Directive({
  selector: "span[hlmInputGroupText]",
})
export class HlmInputGroupText {
  constructor() {
    classes(
      () =>
        `flex items-center gap-2 text-sm text-muted-foreground [&_ng-icon]:pointer-events-none [&_ng-icon:not([class*='text-'])]:text-base`
    );
  }
}
