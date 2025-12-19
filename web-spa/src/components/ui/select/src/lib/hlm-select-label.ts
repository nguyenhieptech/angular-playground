import { Directive, computed, inject, input } from "@angular/core";
import { BrnSelectLabel } from "@spartan-ng/brain/select";
import type { ClassValue } from "clsx";
import { hlm } from "@/components/ui/utils";
import { HlmSelectContent } from "./hlm-select-content";

@Directive({
  selector: "[hlmSelectLabel], hlm-select-label",
  hostDirectives: [BrnSelectLabel],
  host: {
    "[class]": "_computedClass()",
  },
})
export class HlmSelectLabel {
  private readonly _selectContent = inject(HlmSelectContent);
  private readonly _stickyLabels = computed(() => this._selectContent.stickyLabels());
  public readonly userClass = input<ClassValue>("", { alias: "class" });
  protected readonly _computedClass = computed(() =>
    hlm(
      "px-2 py-1.5 text-xs text-muted-foreground",
      this._stickyLabels() ? "sticky top-0 z-[2] block bg-popover" : "",
      this.userClass()
    )
  );
}
