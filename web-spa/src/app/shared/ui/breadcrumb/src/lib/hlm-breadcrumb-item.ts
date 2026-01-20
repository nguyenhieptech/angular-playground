import { Directive } from "@angular/core";
import { classes } from "@/shared/ui/utils";

@Directive({
  selector: "[hlmBreadcrumbItem],hlm-breadcrumb-item",
})
export class HlmBreadcrumbItem {
  constructor() {
    classes(() => "inline-flex items-center gap-1.5");
  }
}
