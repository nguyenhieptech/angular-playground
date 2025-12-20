import { computed, Directive, input } from "@angular/core";
import type { ClassValue } from "clsx";
import { hlm } from "@/shared/ui/utils";

@Directive({
  selector: "p[hlmItemDescription]",
  host: {
    "data-slot": "item-description",
    "[class]": "_computedClass()",
  },
})
export class HlmItemDescription {
  public readonly userClass = input<ClassValue>("", { alias: "class" });
  protected readonly _computedClass = computed(() =>
    hlm(
      "line-clamp-2 text-sm leading-normal font-normal text-balance text-muted-foreground",
      "[&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary",
      this.userClass()
    )
  );
}
