import { Directive, computed, input } from "@angular/core";
import type { ClassValue } from "clsx";
import { hlm } from "@/components/ui/utils";

@Directive({
  selector: "hlm-select-value,[hlmSelectValue], brn-select-value[hlm]",
  host: {
    "[class]": "_computedClass()",
  },
})
export class HlmSelectValue {
  public readonly userClass = input<ClassValue>("", { alias: "class" });
  protected readonly _computedClass = computed(() =>
    hlm(
      "line-clamp-1 flex items-center gap-2 truncate data-[placeholder]:text-muted-foreground",
      this.userClass()
    )
  );
}
