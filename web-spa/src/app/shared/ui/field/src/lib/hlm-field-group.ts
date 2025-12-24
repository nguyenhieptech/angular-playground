import { computed, Directive, input } from "@angular/core";
import type { ClassValue } from "clsx";
import { hlm } from "@/shared/ui/utils";

@Directive({
  selector: "[hlmFieldGroup],hlm-field-group",
  host: {
    "data-slot": "field-group",
    "[class]": "_computedClass()",
  },
})
export class HlmFieldGroup {
  public readonly userClass = input<ClassValue>("", { alias: "class" });

  protected readonly _computedClass = computed(() =>
    hlm(
      "group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4",
      this.userClass()
    )
  );
}
