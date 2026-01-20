import { Directive } from "@angular/core";
import { type VariantProps, cva } from "class-variance-authority";
import { classes } from "@/shared/ui/utils";

export const cardVariants = cva(
  "flex flex-col gap-6 rounded-xl border bg-card py-6 text-card-foreground shadow-sm",
  {
    variants: {},
    defaultVariants: {},
  }
);
export type CardVariants = VariantProps<typeof cardVariants>;

@Directive({
  selector: "[hlmCard],hlm-card",
})
export class HlmCard {
  constructor() {
    classes(() => cardVariants());
  }
}
