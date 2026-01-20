import { Directive } from "@angular/core";
import { BrnCommand } from "@spartan-ng/brain/command";
import { classes } from "@/shared/ui/utils";

@Directive({
  selector: "[hlmCommand],hlm-command",
  hostDirectives: [
    {
      directive: BrnCommand,
      inputs: ["id", "filter"],
      outputs: ["valueChange"],
    },
  ],
  host: {
    "data-slot": "command",
  },
})
export class HlmCommand {
  constructor() {
    classes(
      () =>
        "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground"
    );
  }
}
