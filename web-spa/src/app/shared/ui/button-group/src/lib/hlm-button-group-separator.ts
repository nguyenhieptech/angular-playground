import { Directive } from "@angular/core";
import { BrnSeparator, provideBrnSeparatorConfig } from "@spartan-ng/brain/separator";
import { classes } from "@/shared/ui/utils";

@Directive({
  selector: "[hlmButtonGroupSeparator],hlm-button-group-separator",
  providers: [provideBrnSeparatorConfig({ orientation: "vertical" })],
  hostDirectives: [{ directive: BrnSeparator, inputs: ["orientation", "decorative"] }],
  host: {
    "data-slot": "button-group-separator",
  },
})
export class HlmButtonGroupSeparator {
  constructor() {
    classes(
      () =>
        "relative inline-flex shrink-0 self-stretch bg-input data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-auto data-[orientation=vertical]:w-px"
    );
  }
}
