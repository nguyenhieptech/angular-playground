import { computed, Directive, input } from "@angular/core";
import { BrnSeparator } from "@spartan-ng/brain/separator";
import type { ClassValue } from "clsx";
import { hlm } from "@/shared/ui/utils";

export const hlmSeparatorClass =
  "inline-flex shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px";

@Directive({
  selector: "[hlmSeparator],hlm-separator",
  hostDirectives: [{ directive: BrnSeparator, inputs: ["orientation", "decorative"] }],
  host: {
    "[class]": "_computedClass()",
  },
})
export class HlmSeparator {
  public readonly userClass = input<ClassValue>("", { alias: "class" });
  protected readonly _computedClass = computed(() =>
    hlm(hlmSeparatorClass, this.userClass())
  );
}
