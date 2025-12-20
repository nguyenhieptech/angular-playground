import { Directive, computed, input } from "@angular/core";
import { type VariantProps, cva } from "class-variance-authority";
import type { ClassValue } from "clsx";
import { hlm } from "@/shared/ui/utils";

export const cardVariants = cva(
  "flex flex-col gap-6 rounded-xl border bg-card py-6 text-card-foreground shadow-sm",
  {
    variants: {},
    defaultVariants: {},
  }
);
export type CardVariants = VariantProps<typeof cardVariants>;

@Directive({
  selector: "[hlmCard]",
  host: {
    "[class]": "_computedClass()",
  },
})
export class HlmCard {
  public readonly userClass = input<ClassValue>("", { alias: "class" });
  protected readonly _computedClass = computed(() =>
    hlm(cardVariants(), this.userClass())
  );
}
