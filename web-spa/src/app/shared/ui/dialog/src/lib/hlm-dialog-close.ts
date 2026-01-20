import { Directive } from "@angular/core";
import { BrnDialogClose } from "@spartan-ng/brain/dialog";
import { classes } from "@/shared/ui/utils";

@Directive({
  selector: "button[hlmDialogClose]",
  hostDirectives: [{ directive: BrnDialogClose, inputs: ["delay"] }],
  host: {
    "data-slot": "dialog-close",
  },
})
export class HlmDialogClose {
  constructor() {
    classes(
      () =>
        "absolute top-4 right-4 flex items-center justify-center rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-none disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground [&_ng-icon]:shrink-0"
    );
  }
}
