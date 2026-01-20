import { Directive } from "@angular/core";
import { classes } from "@/shared/ui/utils";

@Directive({
  selector: "div[hlmSidebarGroupContent],hlm-sidebar-group-content",
  host: {
    "data-slot": "sidebar-group-content",
    "data-sidebar": "group-content",
  },
})
export class HlmSidebarGroupContent {
  constructor() {
    classes(() => "w-full text-sm");
  }
}
