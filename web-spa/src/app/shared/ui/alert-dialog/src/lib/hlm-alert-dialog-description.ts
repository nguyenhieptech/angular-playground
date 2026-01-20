import { Directive } from "@angular/core";
import { BrnAlertDialogDescription } from "@spartan-ng/brain/alert-dialog";
import { classes } from "@/shared/ui/utils";

@Directive({
  selector: "[hlmAlertDialogDescription],hlm-alert-dialog-description",
  hostDirectives: [BrnAlertDialogDescription],
  host: {
    "data-slot": "alert-dialog-description",
  },
})
export class HlmAlertDialogDescription {
  constructor() {
    classes(() => "text-sm text-muted-foreground");
  }
}
