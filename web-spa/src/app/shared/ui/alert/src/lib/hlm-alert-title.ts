import { Directive } from "@angular/core";
import { classes } from "@/shared/ui/utils";

@Directive({
  selector: "[hlmAlertTitle],hlm-alert-title",
})
export class HlmAlertTitle {
  constructor() {
    classes(() => "col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight");
  }
}
