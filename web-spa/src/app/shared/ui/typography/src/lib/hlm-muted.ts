import { Directive, computed, input } from "@angular/core";
import type { ClassValue } from "clsx";
import { hlm } from "@/shared/ui/utils";

export const hlmMuted = "text-sm text-muted-foreground";

@Directive({
  selector: "[hlmMuted]",
  host: {
    "[class]": "_computedClass()",
  },
})
export class HlmMuted {
  public readonly userClass = input<ClassValue>("", { alias: "class" });
  protected readonly _computedClass = computed(() => hlm(hlmMuted, this.userClass()));
}
