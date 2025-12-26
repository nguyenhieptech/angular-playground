import { Directive } from "@angular/core";
import { classes } from "@/shared/ui/utils";

@Directive({
  selector: "[hlmDropdownMenuSeparator],hlm-dropdown-menu-separator",
  host: {
    "data-slot": "dropdown-menu-separator",
  },
})
export class HlmDropdownMenuSeparator {
  constructor() {
    classes(() => "-mx-1 my-1 block h-px bg-border");
  }
}
