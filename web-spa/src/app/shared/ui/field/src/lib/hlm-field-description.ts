import { computed, Directive, input } from "@angular/core";
import type { ClassValue } from "clsx";
import { hlm } from "@/shared/ui/utils";

@Directive({
  selector: "[hlmFieldDescription],hlm-field-description",
  host: {
    "data-slot": "field-description",
    "[class]": "_computedClass()",
  },
})
export class HlmFieldDescription {
  public readonly userClass = input<ClassValue>("", { alias: "class" });

  protected readonly _computedClass = computed(() =>
    hlm(
      "text-sm leading-normal font-normal text-muted-foreground group-has-data-[orientation=horizontal]/field:text-balance",
      "last:mt-0 nth-last-2:-mt-1 [[data-variant=legend]+&]:-mt-1.5",
      "[&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary",
      this.userClass()
    )
  );
}
