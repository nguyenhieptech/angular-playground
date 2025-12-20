import { computed, Directive, input } from "@angular/core";
import type { ClassValue } from "clsx";
import { hlm } from "@/shared/ui/utils";

@Directive({
  selector: "[hlmItemTitle],hlm-item-title",
  host: {
    "data-slot": "item-title",
    "[class]": "_computedClass()",
  },
})
export class HlmItemTitle {
  public readonly userClass = input<ClassValue>("", { alias: "class" });
  protected readonly _computedClass = computed(() =>
    hlm(
      "flex w-fit items-center gap-2 text-sm leading-snug font-medium",
      this.userClass()
    )
  );
}
