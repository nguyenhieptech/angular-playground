import { Directive } from "@angular/core";
import { classes } from "@/shared/ui/utils";

@Directive({
  selector: "[hlmInputOtpGroup],hlm-input-otp-group",
  host: {
    "data-slot": "input-otp-group",
  },
})
export class HlmInputOtpGroup {
  constructor() {
    classes(() => "flex items-center");
  }
}
