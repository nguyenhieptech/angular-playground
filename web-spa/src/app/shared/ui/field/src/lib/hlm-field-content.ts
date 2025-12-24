import { computed, Directive, input } from "@angular/core";
import type { ClassValue } from "clsx";
import { hlm } from "@/shared/ui/utils";

@Directive({
  selector: "[hlmFieldContent],hlm-field-content",
  host: {
    "data-slot": "field-content",
    "[class]": "_computedClass()",
  },
})
export class HlmFieldContent {
  public readonly userClass = input<ClassValue>("", { alias: "class" });

  protected readonly _computedClass = computed(() =>
    hlm("group/field-content flex flex-1 flex-col gap-1.5 leading-snug", this.userClass())
  );
}
