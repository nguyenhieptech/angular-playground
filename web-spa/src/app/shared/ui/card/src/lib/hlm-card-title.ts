import { Directive } from "@angular/core";
import { classes } from "@/shared/ui/utils";

@Directive({
  selector: "[hlmCardTitle]",
})
export class HlmCardTitle {
  constructor() {
    classes(() => "leading-none font-semibold");
  }
}
