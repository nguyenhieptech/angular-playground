import { computed, Directive, input } from "@angular/core";
import { BrnSeparator } from "@spartan-ng/brain/separator";
import type { ClassValue } from "clsx";
import { hlmSeparatorClass } from "@/shared/ui/separator";
import { hlm } from "@/shared/ui/utils";

@Directive({
  selector: "div[hlmItemSeparator]",
  hostDirectives: [{ directive: BrnSeparator, inputs: ["orientation"] }],
  host: { "data-slot": "item-separator", "[class]": "_computedClass()" },
})
export class HlmItemSeparator {
  public readonly userClass = input<ClassValue>("", { alias: "class" });
  protected readonly _computedClass = computed(() =>
    hlm(hlmSeparatorClass, "my-0", this.userClass())
  );
}
