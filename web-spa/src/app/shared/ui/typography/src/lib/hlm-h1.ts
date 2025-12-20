import { Directive, computed, input } from "@angular/core";
import type { ClassValue } from "clsx";
import { hlm } from "@/shared/ui/utils";

export const hlmH1 = "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl";

@Directive({
  selector: "[hlmH1]",
  host: {
    "[class]": "_computedClass()",
  },
})
export class HlmH1 {
  public readonly userClass = input<ClassValue>("", { alias: "class" });
  protected readonly _computedClass = computed(() => hlm(hlmH1, this.userClass()));
}
