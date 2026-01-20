import { Directive } from "@angular/core";
import { BrnSheetDescription } from "@spartan-ng/brain/sheet";
import { classes } from "@/shared/ui/utils";

@Directive({
  selector: "[hlmSheetDescription],hlm-sheet-description",
  hostDirectives: [BrnSheetDescription],
  host: {
    "data-slot": "sheet-description",
  },
})
export class HlmSheetDescription {
  constructor() {
    classes(() => "text-sm text-muted-foreground");
  }
}
