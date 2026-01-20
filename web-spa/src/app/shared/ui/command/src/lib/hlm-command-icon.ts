import { Directive } from "@angular/core";
import { provideHlmIconConfig } from "@/shared/ui/icon";
import { classes } from "@/shared/ui/utils";

@Directive({
  selector: "[hlmCommandIcon],hlm-command-icon",
  providers: [provideHlmIconConfig({ size: "sm" })],
  host: {
    "data-slot": "command-icon",
  },
})
export class HlmCommandIcon {
  constructor() {
    classes(() => "pointer-events-none shrink-0 text-muted-foreground");
  }
}
