import { Directive } from "@angular/core";
import { BrnAlertDialogTitle } from "@spartan-ng/brain/alert-dialog";
import { classes } from "@/shared/ui/utils";

@Directive({
  selector: "[hlmAlertDialogTitle],hlm-alert-dialog-title",
  hostDirectives: [BrnAlertDialogTitle],
  host: {
    "data-slot": "alert-dialog-title",
  },
})
export class HlmAlertDialogTitle {
  constructor() {
    classes(() => "text-lg font-semibold");
  }
}
