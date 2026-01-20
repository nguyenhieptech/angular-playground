import { Directive } from "@angular/core";
import { classes } from "@/shared/ui/utils";

@Directive({
  selector: "[hlmSelectValue],hlm-select-value,brn-select-value[hlm]",
})
export class HlmSelectValue {
  constructor() {
    classes(
      () =>
        "line-clamp-1 flex items-center gap-2 truncate data-[placeholder]:text-muted-foreground"
    );
  }
}
