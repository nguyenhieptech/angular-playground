import { Directive } from "@angular/core";
import { classes } from "@/shared/ui/utils";

@Directive({
  selector: "[hlmCardContent],hlm-card-content",
})
export class HlmCardContent {
  constructor() {
    classes(() => "px-6");
  }
}
