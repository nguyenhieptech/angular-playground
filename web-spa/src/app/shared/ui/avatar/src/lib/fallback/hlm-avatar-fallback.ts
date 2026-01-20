import { Directive } from "@angular/core";
import { BrnAvatarFallback } from "@spartan-ng/brain/avatar";
import { classes } from "@/shared/ui/utils";

@Directive({
  selector: "[hlmAvatarFallback],hlm-avatar-fallback",
  exportAs: "avatarFallback",
  hostDirectives: [
    {
      directive: BrnAvatarFallback,
    },
  ],
})
export class HlmAvatarFallback {
  constructor() {
    classes(() => "flex size-full items-center justify-center rounded-full bg-muted");
  }
}
