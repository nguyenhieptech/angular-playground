import { Directive } from "@angular/core";
import { classes } from "@/shared/ui/utils";

@Directive({
  selector: "[hlmFieldDescription],hlm-field-description",
  host: {
    "data-slot": "field-description",
  },
})
export class HlmFieldDescription {
  constructor() {
    classes(() => [
      "text-sm leading-normal font-normal text-muted-foreground group-has-data-[orientation=horizontal]/field:text-balance",
      "last:mt-0 nth-last-2:-mt-1 [[data-variant=legend]+&]:-mt-1.5",
      "[&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary",
    ]);
  }
}
