import { Directive } from "@angular/core";
import { BrnSheetClose } from "@spartan-ng/brain/sheet";
import { classes } from "@/shared/ui/utils";

@Directive({
  selector: "button[hlmSheetClose]",
  hostDirectives: [{ directive: BrnSheetClose, inputs: ["delay"] }],
  host: {
    "data-slot": "sheet-close",
  },
})
export class HlmSheetClose {
  constructor() {
    classes(
      () =>
        "absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none data-[state=open]:bg-secondary"
    );
  }
}
