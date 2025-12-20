import { computed, Directive, input } from "@angular/core";
import type { ClassValue } from "clsx";
import { hlm } from "@/shared/ui/utils";

@Directive({
  selector: "[hlmItemGroup],hlm-item-group",
  host: { "data-slot": "item-group", "[class]": "_computedClass()" },
})
export class HlmItemGroup {
  public readonly userClass = input<ClassValue>("", { alias: "class" });
  protected readonly _computedClass = computed(() =>
    hlm("group/item-group flex flex-col", this.userClass())
  );
}
