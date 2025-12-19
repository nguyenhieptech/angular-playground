import { Directive, computed, input } from "@angular/core";
import type { ClassValue } from "clsx";
import { hlm } from "@/components/ui/utils";

export const hlmSmall = "text-sm font-medium leading-none";

@Directive({
  selector: "[hlmSmall]",
  host: {
    "[class]": "_computedClass()",
  },
})
export class HlmSmall {
  public readonly userClass = input<ClassValue>("", { alias: "class" });
  protected readonly _computedClass = computed(() => hlm(hlmSmall, this.userClass()));
}
