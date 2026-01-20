import { Directive } from "@angular/core";
import { classes } from "@/shared/ui/utils";

@Directive({
  selector: "[hlmBreadcrumbList],hlm-breadcrumb-list",
})
export class HlmBreadcrumbList {
  constructor() {
    classes(
      () =>
        "flex flex-wrap items-center gap-1.5 text-sm wrap-break-word text-muted-foreground sm:gap-2.5"
    );
  }
}
