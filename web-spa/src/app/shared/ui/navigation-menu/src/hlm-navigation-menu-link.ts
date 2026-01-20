import { Directive } from "@angular/core";
import { BrnNavigationMenuLink } from "@spartan-ng/brain/navigation-menu";
import { classes } from "@/shared/ui/utils";

@Directive({
  selector: "a[hlmNavigationMenuLink]",
  hostDirectives: [{ directive: BrnNavigationMenuLink, inputs: ["active"] }],
})
export class HlmNavigationMenuLink {
  constructor() {
    classes(() => [
      'flex flex-col gap-1 rounded-sm p-2 text-sm transition-all outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground data-[active=true]:hover:bg-accent data-[active=true]:focus:bg-accent [&_ng-icon:not([class*="text-"])]:text-base [&_ng-icon:not([class*="text-"])]:text-muted-foreground',
      "data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50",
    ]);
  }
}
