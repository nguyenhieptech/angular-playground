import { Directive } from "@angular/core";
import { classes } from "@/shared/ui/utils";

@Directive({
  selector: "[hlmCardFooter],hlm-card-footer",
})
export class HlmCardFooter {
  constructor() {
    classes(() => "flex items-center px-6 [.border-t]:pt-6");
  }
}
