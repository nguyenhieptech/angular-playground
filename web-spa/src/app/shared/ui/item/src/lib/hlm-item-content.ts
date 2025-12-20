import { computed, Directive, input } from "@angular/core";
import type { ClassValue } from "clsx";
import { hlm } from "@/shared/ui/utils";

@Directive({
  selector: "[hlmItemContent],hlm-item-content",
  host: {
    "data-slot": "item-content",
    "[class]": "_computedClass()",
  },
})
export class HlmItemContent {
  public readonly userClass = input<ClassValue>("", { alias: "class" });
  protected readonly _computedClass = computed(() =>
    hlm(
      "flex flex-1 flex-col gap-1 [&+[data-slot=item-content]]:flex-none",
      this.userClass()
    )
  );
}
