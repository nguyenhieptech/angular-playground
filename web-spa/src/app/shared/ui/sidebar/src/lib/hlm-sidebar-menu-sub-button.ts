import { type BooleanInput } from "@angular/cdk/coercion";
import { booleanAttribute, Directive, input } from "@angular/core";
import { classes } from "@/shared/ui/utils";

@Directive({
  selector: "a[hlmSidebarMenuSubButton], button[hlmSidebarMenuSubButton]",
  host: {
    "data-slot": "sidebar-menu-sub-button",
    "data-sidebar": "menu-sub-button",
    "[attr.data-active]": "isActive()",
    "[attr.data-size]": "size()",
  },
})
export class HlmSidebarMenuSubButton {
  public readonly size = input<"sm" | "md">("md");
  public readonly isActive = input<boolean, BooleanInput>(false, {
    transform: booleanAttribute,
  });
  constructor() {
    classes(() => [
      `flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground ring-sidebar-ring outline-none hover:cursor-pointer hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 disabled:hover:cursor-default aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>_ng-icon]:size-4 [&>_ng-icon]:shrink-0 [&>_ng-icon:not([class*='text-'])]:text-sidebar-accent-foreground [&>span:last-child]:truncate`,
      "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
      "data-[size=md]:text-sm data-[size=sm]:text-xs",
      "group-data-[collapsible=icon]:hidden",
    ]);
  }
}
