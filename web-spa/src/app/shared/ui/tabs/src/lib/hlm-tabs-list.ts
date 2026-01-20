import { Directive, input } from "@angular/core";
import { BrnTabsList } from "@spartan-ng/brain/tabs";
import { type VariantProps, cva } from "class-variance-authority";
import { classes } from "@/shared/ui/utils";

export const listVariants = cva(
  "inline-flex h-9 w-fit items-center justify-center rounded-lg bg-muted p-[3px] text-muted-foreground",
  {
    variants: {
      orientation: {
        horizontal: "h-10 space-x-1",
        vertical: "mt-2 h-fit flex-col space-y-1",
      },
    },
    defaultVariants: {
      orientation: "horizontal",
    },
  }
);
type ListVariants = VariantProps<typeof listVariants>;

@Directive({
  selector: "[hlmTabsList],hlm-tabs-list",
  hostDirectives: [BrnTabsList],
  host: {
    "data-slot": "tabs-list",
  },
})
export class HlmTabsList {
  public readonly orientation = input<ListVariants["orientation"]>("horizontal");

  constructor() {
    classes(() => listVariants({ orientation: this.orientation() }));
  }
}
