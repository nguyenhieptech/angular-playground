import { Directive } from "@angular/core";
import { BrnDialogClose } from "@spartan-ng/brain/dialog";
import { HlmButton, provideBrnButtonConfig } from "@/shared/ui/button";
import { provideHlmIconConfig } from "@/shared/ui/icon";
import { classes } from "@/shared/ui/utils";

@Directive({
  selector: "[hlmCommandDialogCloseBtn],hlm-command-dialog-close-button",
  providers: [
    provideBrnButtonConfig({ variant: "ghost" }),
    provideHlmIconConfig({ size: "xs" }),
  ],
  hostDirectives: [HlmButton, BrnDialogClose],
})
export class HlmCommandDialogCloseButton {
  constructor() {
    classes(
      () =>
        "absolute top-3 right-3 inline-flex size-5! items-center justify-center rounded-md p-1! px-4 py-2 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
    );
  }
}
