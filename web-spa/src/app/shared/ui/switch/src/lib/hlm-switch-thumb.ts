import { Directive } from "@angular/core";
import { classes } from "@/shared/ui/utils";

@Directive({
  selector: "brn-switch-thumb[hlm],[hlmSwitchThumb]",
})
export class HlmSwitchThumb {
  constructor() {
    classes(
      () =>
        "pointer-events-none block size-4 rounded-full bg-background ring-0 transition-transform group-data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0 dark:group-data-[state=checked]:bg-primary-foreground dark:group-data-[state=unchecked]:bg-foreground"
    );
  }
}
