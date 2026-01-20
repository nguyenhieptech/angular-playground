import { Directive } from "@angular/core";
import { provideIcons } from "@ng-icons/core";
import { lucideChevronDown } from "@ng-icons/lucide";
import { provideHlmIconConfig } from "@/shared/ui/icon";
import { classes } from "@/shared/ui/utils";

@Directive({
  selector: "ng-icon[hlmAccordionIcon],ng-icon[hlmAccIcon]",
  providers: [provideIcons({ lucideChevronDown }), provideHlmIconConfig({ size: "sm" })],
})
export class HlmAccordionIcon {
  constructor() {
    classes(
      () =>
        "pointer-events-none size-4 shrink-0 translate-y-0.5 text-muted-foreground transition-transform duration-200 group-data-[state=open]:rotate-180"
    );
  }
}
