import { computed, Directive, input } from "@angular/core";
import type { ClassValue } from "clsx";
import { hlm } from "@/components/ui/utils";

@Directive({
  selector: "[hlmDropdownMenuShortcut],hlm-dropdown-menu-shortcut",
  host: {
    "data-slot": "dropdown-menu-shortcut",
    "[class]": "_computedClass()",
  },
})
export class HlmDropdownMenuShortcut {
  public readonly userClass = input<ClassValue>("", { alias: "class" });
  protected readonly _computedClass = computed(() =>
    hlm("ml-auto text-xs tracking-widest text-muted-foreground", this.userClass())
  );
}
