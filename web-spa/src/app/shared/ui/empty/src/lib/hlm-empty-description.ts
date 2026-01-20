import { Directive } from "@angular/core";
import { classes } from "@/shared/ui/utils";

@Directive({
  selector: "[hlmEmptyDescription],hlm-empty-description",
  host: {
    "data-slot": "empty-description",
  },
})
export class HlmEmptyDescription {
  constructor() {
    classes(
      () =>
        "text-sm/relaxed text-muted-foreground [&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary"
    );
  }
}
