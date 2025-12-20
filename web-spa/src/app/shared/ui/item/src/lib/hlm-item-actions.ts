import { computed, Directive, input } from "@angular/core";
import type { ClassValue } from "clsx";
import { hlm } from "@/shared/ui/utils";

@Directive({
  selector: "[hlmItemActions],hlm-item-actions",
  host: {
    "data-slot": "item-actions",
    "[class]": "_computedClass()",
  },
})
export class HlmItemActions {
  public readonly userClass = input<ClassValue>("", { alias: "class" });
  protected readonly _computedClass = computed(() =>
    hlm("flex items-center gap-2", this.userClass())
  );
}
