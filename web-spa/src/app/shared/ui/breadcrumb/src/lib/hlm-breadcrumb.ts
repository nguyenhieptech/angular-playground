import { Directive, input } from "@angular/core";

@Directive({
  selector: "[hlmBreadcrumb],hlm-breadcrumb",
  host: {
    role: "navigation",
    "[attr.aria-label]": "ariaLabel()",
  },
})
export class HlmBreadcrumb {
  public readonly ariaLabel = input<string>("breadcrumb", { alias: "aria-label" });
}
