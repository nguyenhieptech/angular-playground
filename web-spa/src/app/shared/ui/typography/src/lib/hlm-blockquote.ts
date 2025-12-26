import { Directive } from "@angular/core";
import { classes } from "@/shared/ui/utils";

export const hlmBlockquote = "mt-6 border-l-2 border-border pl-6 italic";

@Directive({
  selector: "[hlmBlockquote]",
})
export class HlmBlockquote {
  constructor() {
    classes(() => hlmBlockquote);
  }
}
