import { computed, Directive, input } from "@angular/core";
import type { ClassValue } from "clsx";
import { hlm } from "@/shared/ui/utils";

@Directive({
  selector: "[hlmItemFooter],hlm-item-footer",
  host: {
    "data-slot": "item-footer",
    "[class]": "_computedClass()",
  },
})
export class HlmItemFooter {
  public readonly userClass = input<ClassValue>("", { alias: "class" });
  protected readonly _computedClass = computed(() =>
    hlm("flex basis-full items-center justify-between gap-2", this.userClass())
  );
}
