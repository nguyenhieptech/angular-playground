import { Directive, computed, input } from "@angular/core";
import type { ClassValue } from "clsx";
import { hlm } from "@/components/ui/utils";

@Directive({
  selector: "[hlmCardDescription]",
  host: {
    "[class]": "_computedClass()",
  },
})
export class HlmCardDescription {
  public readonly userClass = input<ClassValue>("", { alias: "class" });
  protected readonly _computedClass = computed(() =>
    hlm("text-sm text-muted-foreground", this.userClass())
  );
}
