import { computed, Directive, input } from "@angular/core";
import type { ClassValue } from "clsx";
import { hlm } from "@/components/ui/utils";

@Directive({
  selector: "[hlmDropdownMenuSeparator],hlm-dropdown-menu-separator",
  host: {
    "data-slot": "dropdown-menu-separator",
    "[class]": "_computedClass()",
  },
})
export class HlmDropdownMenuSeparator {
  public readonly userClass = input<ClassValue>("", { alias: "class" });
  protected readonly _computedClass = computed(() =>
    hlm("-mx-1 my-1 block h-px bg-border", this.userClass())
  );
}
