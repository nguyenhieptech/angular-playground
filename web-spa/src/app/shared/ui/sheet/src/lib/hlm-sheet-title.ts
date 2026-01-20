import { Directive } from "@angular/core";
import { BrnSheetTitle } from "@spartan-ng/brain/sheet";
import { classes } from "@/shared/ui/utils";

@Directive({
  selector: "[hlmSheetTitle],hlm-sheet-title",
  hostDirectives: [BrnSheetTitle],
  host: {
    "data-slot": "sheet-title",
  },
})
export class HlmSheetTitle {
  constructor() {
    classes(() => "font-semibold text-foreground");
  }
}
