import { Directive } from "@angular/core";
import { provideHlmIconConfig } from "@/shared/ui/icon";

@Directive({
  selector: "[hlmAlertIcon],hlm-alert-icon",
  providers: [provideHlmIconConfig({ size: "sm" })],
})
export class HlmAlertIcon {}
