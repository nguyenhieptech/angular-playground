import { Directive } from "@angular/core";
import { classes } from "@/shared/ui/utils";

@Directive({
  selector: "p[hlmItemDescription]",
  host: {
    "data-slot": "item-description",
  },
})
export class HlmItemDescription {
  constructor() {
    classes(() => [
      "line-clamp-2 text-sm leading-normal font-normal text-balance text-muted-foreground",
      "[&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary",
    ]);
  }
}
