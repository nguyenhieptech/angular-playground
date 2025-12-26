import { type BooleanInput } from "@angular/cdk/coercion";
import { booleanAttribute, Directive, input } from "@angular/core";
import { classes } from "@/shared/ui/utils";

@Directive({
  selector: "button[hlmSidebarMenuAction]",
  host: {
    "data-slot": "sidebar-menu-action",
    "data-sidebar": "menu-action",
  },
})
export class HlmSidebarMenuAction {
  public readonly showOnHover = input<boolean, BooleanInput>(false, {
    transform: booleanAttribute,
  });

  constructor() {
    classes(() => [
      "absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground ring-sidebar-ring transition-transform outline-none peer-hover/menu-button:text-sidebar-accent-foreground hover:cursor-pointer hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 disabled:hover:cursor-default [&>_ng-icon]:size-4 [&>_ng-icon]:shrink-0",
      // Increases the hit area of the button on mobile.
      "after:absolute after:-inset-2 after:md:hidden",
      "peer-data-[size=sm]/menu-button:top-1",
      "peer-data-[size=default]/menu-button:top-1.5",
      "peer-data-[size=lg]/menu-button:top-2.5",
      "group-data-[collapsible=icon]:hidden",
      this.showOnHover() &&
        "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground data-[state=open]:opacity-100 md:opacity-0",
    ]);
  }
}
