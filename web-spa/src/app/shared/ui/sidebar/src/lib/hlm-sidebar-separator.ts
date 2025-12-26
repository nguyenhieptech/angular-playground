import { Directive } from "@angular/core";
import { HlmSeparator } from "@/shared/ui/separator";
import { classes } from "@/shared/ui/utils";

@Directive({
  selector: "[hlmSidebarSeparator],hlm-sidebar-separator",
  hostDirectives: [{ directive: HlmSeparator }],
  host: {
    "data-slot": "sidebar-separator",
    "data-sidebar": "separator",
  },
})
export class HlmSidebarSeparator {
  constructor() {
    classes(() => "mx-2 w-auto bg-sidebar-border");
  }
}
