import { type BooleanInput } from "@angular/cdk/coercion";
import { CdkMenuItem } from "@angular/cdk/menu";
import { booleanAttribute, Directive, input } from "@angular/core";
import { classes } from "@/shared/ui/utils";

@Directive({
  selector: "button[hlmDropdownMenuItem]",
  hostDirectives: [
    {
      directive: CdkMenuItem,
      inputs: ["cdkMenuItemDisabled: disabled"],
      outputs: ["cdkMenuItemTriggered: triggered"],
    },
  ],
  host: {
    "data-slot": "dropdown-menu-item",
    "[disabled]": "disabled() || null",
    "[attr.data-disabled]": 'disabled() ? "" : null',
    "[attr.data-variant]": "variant()",
    "[attr.data-inset]": 'inset() ? "" : null',
  },
})
export class HlmDropdownMenuItem {
  public readonly disabled = input<boolean, BooleanInput>(false, {
    transform: booleanAttribute,
  });

  public readonly variant = input<"default" | "destructive">("default");

  public readonly inset = input<boolean, BooleanInput>(false, {
    transform: booleanAttribute,
  });

  constructor() {
    classes(
      () =>
        "relative flex w-full cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none select-none hover:bg-accent focus:text-accent-foreground focus-visible:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 [&_ng-icon]:pointer-events-none [&_ng-icon]:shrink-0 [&_ng-icon:not([class*='text-'])]:text-muted-foreground [&_svg:not([class*='text-'])]:text-base data-[variant=destructive]:*:[ng-icon]:!text-destructive"
    );
  }
}
