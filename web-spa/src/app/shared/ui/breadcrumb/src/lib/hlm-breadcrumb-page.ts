import { Directive } from "@angular/core";
import { classes } from "@/shared/ui/utils";

@Directive({
  selector: "[hlmBreadcrumbPage],hlm-breadcrumb-page",
  host: {
    role: "link",
    "aria-disabled": "true",
    "aria-current": "page",
  },
})
export class HlmBreadcrumbPage {
  constructor() {
    classes(() => "font-normal text-foreground");
  }
}
