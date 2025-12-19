import { Directive, computed, input } from "@angular/core";
import type { ClassValue } from "clsx";
import { hlm } from "@/components/ui/utils";

@Directive({
  selector: "hlm-select, brn-select [hlm]",
  host: {
    "[class]": "_computedClass()",
  },
})
export class HlmSelect {
  public readonly userClass = input<ClassValue>("", { alias: "class" });
  protected readonly _computedClass = computed(() => hlm("space-y-2", this.userClass()));
}
