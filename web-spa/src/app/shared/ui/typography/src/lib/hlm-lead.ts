import { Directive, computed, input } from "@angular/core";
import type { ClassValue } from "clsx";
import { hlm } from "@/shared/ui/utils";

export const hlmLead = "text-xl text-muted-foreground";

@Directive({
  selector: "[hlmLead]",
  host: {
    "[class]": "_computedClass()",
  },
})
export class HlmLead {
  public readonly userClass = input<ClassValue>("", { alias: "class" });
  protected readonly _computedClass = computed(() => hlm(hlmLead, this.userClass()));
}
