import { Directive } from "@angular/core";
import { classes } from "@/shared/ui/utils";

@Directive({
  selector: "[hlmCardHeader],hlm-card-header",
})
export class HlmCardHeader {
  constructor() {
    classes(
      () =>
        `@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6`
    );
  }
}
