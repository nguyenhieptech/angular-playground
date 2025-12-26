import { Directive } from "@angular/core";
import { classes } from "@/shared/ui/utils";

@Directive({
  selector: "[hlmDropdownMenuShortcut],hlm-dropdown-menu-shortcut",
  host: {
    "data-slot": "dropdown-menu-shortcut",
  },
})
export class HlmDropdownMenuShortcut {
  constructor() {
    classes(() => "ml-auto text-xs tracking-widest text-muted-foreground");
  }
}
