import { Directive, input } from "@angular/core";
import { RouterLink } from "@angular/router";
import { classes } from "@/shared/ui/utils";

@Directive({
  selector: "[hlmBreadcrumbLink],hlm-breadcrumb-link",
  hostDirectives: [
    {
      directive: RouterLink,
      inputs: [
        "target",
        "queryParams",
        "fragment",
        "queryParamsHandling",
        "state",
        "info",
        "relativeTo",
        "preserveFragment",
        "skipLocationChange",
        "replaceUrl",
        "routerLink: link",
      ],
    },
  ],
})
export class HlmBreadcrumbLink {
  constructor() {
    classes(() => "transition-colors hover:text-foreground");
  }

  /** The link to navigate to the page. */
  public readonly link = input<RouterLink["routerLink"]>();
}
