import { Directive, input } from "@angular/core";
import { cva, type VariantProps } from "class-variance-authority";
import { classes } from "@/shared/ui/utils";
import { injectHlmItemConfig } from "./hlm-item-token";

const itemVariants = cva(
  "group/item flex flex-wrap items-center rounded-md border border-transparent text-sm transition-colors duration-100 outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 [a]:transition-colors [a]:hover:bg-accent/50",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border-border",
        muted: "bg-muted/50",
      },
      size: {
        default: "gap-4 p-4",
        sm: "gap-2.5 px-4 py-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export type ItemVariants = VariantProps<typeof itemVariants>;

@Directive({
  selector: "div[hlmItem], a[hlmItem]",
  host: {
    "data-slot": "item",
    "[attr.data-variant]": "variant()",
    "[attr.data-size]": "size()",
  },
})
export class HlmItem {
  private readonly _config = injectHlmItemConfig();
  public readonly variant = input<ItemVariants["variant"]>(this._config.variant);
  public readonly size = input<ItemVariants["size"]>(this._config.size);

  constructor() {
    classes(() => itemVariants({ variant: this.variant(), size: this.size() }));
  }
}
