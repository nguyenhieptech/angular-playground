import { CdkMenuGroup } from "@angular/cdk/menu";
import { computed, Directive, input } from "@angular/core";
import type { ClassValue } from "clsx";
import { hlm } from "@/shared/ui/utils";

@Directive({
  selector: "[hlmDropdownMenuGroup],hlm-dropdown-menu-group",
  hostDirectives: [CdkMenuGroup],
  host: {
    "data-slot": "dropdown-menu-group",
    "[class]": "_computedClass()",
  },
})
export class HlmDropdownMenuGroup {
  public readonly userClass = input<ClassValue>("", { alias: "class" });
  protected readonly _computedClass = computed(() => hlm("block", this.userClass()));
}
