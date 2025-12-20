import { Directive, computed, input } from "@angular/core";
import type { ClassValue } from "clsx";
import { hlm } from "@/shared/ui/utils";

export const hlmH3 = "scroll-m-20 text-2xl font-semibold tracking-tight";

@Directive({
  selector: "[hlmH3]",
  host: {
    "[class]": "_computedClass()",
  },
})
export class HlmH3 {
  public readonly userClass = input<ClassValue>("", { alias: "class" });
  protected readonly _computedClass = computed(() => hlm(hlmH3, this.userClass()));
}
