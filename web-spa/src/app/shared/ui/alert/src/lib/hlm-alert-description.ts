import { Directive } from "@angular/core";
import { classes } from "@/shared/ui/utils";

@Directive({
  selector: "[hlmAlertDesc],[hlmAlertDescription],hlm-alert-desc,hlm-alert-description",
})
export class HlmAlertDescription {
  constructor() {
    classes(
      () =>
        "col-start-2 grid justify-items-start gap-1 text-sm text-muted-foreground [&_p]:leading-relaxed"
    );
  }
}
