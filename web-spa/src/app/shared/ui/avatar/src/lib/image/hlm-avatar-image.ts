import { Directive, inject } from "@angular/core";
import { BrnAvatarImage } from "@spartan-ng/brain/avatar";
import { classes } from "@/shared/ui/utils";

@Directive({
  selector: "img[hlmAvatarImage],hlm-avatar-image",
  exportAs: "avatarImage",
  hostDirectives: [BrnAvatarImage],
})
export class HlmAvatarImage {
  public readonly canShow = inject(BrnAvatarImage).canShow;

  constructor() {
    classes(() => "aspect-square size-full");
  }
}
