import { Directive } from "@angular/core";
import { classes } from "@/shared/ui/utils";

@Directive({
  selector: "[hlmCardDescription]",
})
export class HlmCardDescription {
  constructor() {
    classes(() => "text-sm text-muted-foreground");
  }
}
