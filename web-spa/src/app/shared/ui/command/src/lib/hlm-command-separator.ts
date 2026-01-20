import { Directive } from "@angular/core";
import { classes } from "@/shared/ui/utils";

@Directive({
  selector: "[hlmCommandSeparator],hlm-command-separator",
  host: {
    "data-slot": "command-separator",
    role: "separator",
  },
})
export class HlmCommandSeparator {
  constructor() {
    classes(() => "-mx-1 block h-px bg-border");
  }
}
