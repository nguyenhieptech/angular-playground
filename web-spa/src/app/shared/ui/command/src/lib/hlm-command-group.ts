import { Directive } from "@angular/core";
import { BrnCommandGroup } from "@spartan-ng/brain/command";
import { classes } from "@/shared/ui/utils";

@Directive({
  selector: "[hlmCommandGroup],hlm-command-group",
  hostDirectives: [
    {
      directive: BrnCommandGroup,
      inputs: ["id"],
    },
  ],
  host: {
    "data-slot": "command-group",
  },
})
export class HlmCommandGroup {
  constructor() {
    classes(() => "block overflow-hidden p-1 text-foreground data-hidden:hidden");
  }
}
