import { Directive } from "@angular/core";
import { classes } from "@/shared/ui/utils";

@Directive({
  selector: "hlm-select-value,[hlmSelectValue], brn-select-value[hlm]",
})
export class HlmSelectValue {
  constructor() {
    classes(
      () =>
        "line-clamp-1 flex items-center gap-2 truncate data-[placeholder]:text-muted-foreground"
    );
  }
}
