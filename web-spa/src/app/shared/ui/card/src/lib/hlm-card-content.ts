import { Directive, computed, input } from "@angular/core";
import type { ClassValue } from "clsx";
import { hlm } from "@/shared/ui/utils";

@Directive({
  selector: "[hlmCardContent]",
  host: {
    "[class]": "_computedClass()",
  },
})
export class HlmCardContent {
  public readonly userClass = input<ClassValue>("", { alias: "class" });
  protected readonly _computedClass = computed(() => hlm("px-6", this.userClass()));
}
