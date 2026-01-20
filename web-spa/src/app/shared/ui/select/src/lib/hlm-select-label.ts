import { computed, Directive, inject } from "@angular/core";
import { BrnSelectLabel } from "@spartan-ng/brain/select";
import { classes } from "@/shared/ui/utils";
import { HlmSelectContent } from "./hlm-select-content";

@Directive({
  selector: "[hlmSelectLabel],hlm-select-label",
  hostDirectives: [BrnSelectLabel],
})
export class HlmSelectLabel {
  private readonly _selectContent = inject(HlmSelectContent);
  private readonly _stickyLabels = computed(() => this._selectContent.stickyLabels());

  constructor() {
    classes(() => [
      "px-2 py-1.5 text-xs text-muted-foreground",
      this._stickyLabels() ? "sticky top-0 z-2 block bg-popover" : "",
    ]);
  }
}
