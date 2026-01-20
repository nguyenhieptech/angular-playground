import { Directive } from "@angular/core";
import { BrnProgress } from "@spartan-ng/brain/progress";
import { classes } from "@/shared/ui/utils";

@Directive({
  selector: "hlm-progress,[hlmProgress]",
  hostDirectives: [{ directive: BrnProgress, inputs: ["value", "max", "getValueLabel"] }],
})
export class HlmProgress {
  constructor() {
    classes(
      () => "relative inline-flex h-2 w-full overflow-hidden rounded-full bg-primary/20"
    );
  }
}
