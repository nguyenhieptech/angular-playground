import { Directive } from "@angular/core";
import { classes } from "@/shared/ui/utils";

@Directive({
  selector: "[hlmCommandShortcut],hlm-command-shortcut",
  host: {
    "data-slot": "command-shortcut",
  },
})
export class HlmCommandShortcut {
  constructor() {
    classes(() => "ml-auto text-xs tracking-widest text-muted-foreground");
  }
}
