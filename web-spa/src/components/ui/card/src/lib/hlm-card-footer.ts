import { Directive, computed, input } from "@angular/core";
import type { ClassValue } from "clsx";
import { hlm } from "@/components/ui/utils";

@Directive({
  selector: "[hlmCardFooter]",
  host: {
    "[class]": "_computedClass()",
  },
})
export class HlmCardFooter {
  public readonly userClass = input<ClassValue>("", { alias: "class" });
  protected readonly _computedClass = computed(() =>
    hlm("flex items-center px-6 [.border-t]:pt-6", this.userClass())
  );
}
