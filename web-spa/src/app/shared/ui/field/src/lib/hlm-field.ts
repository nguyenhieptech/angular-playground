import { computed, Directive, input } from "@angular/core";
import { cva, type VariantProps } from "class-variance-authority";
import type { ClassValue } from "clsx";
import { hlm } from "@/shared/ui/utils";

const fieldVariants = cva(
  "group/field flex w-full gap-3 data-[invalid=true]:text-destructive",
  {
    variants: {
      orientation: {
        vertical: ["*:sr-only:w-auto flex-col *:w-full"],
        horizontal: [
          "flex-row items-center",
          "*:data-[slot=field-label]:flex-auto",
          "has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
        ],
        responsive: [
          "*:sr-only:w-auto flex-col *:w-full @md/field-group:flex-row @md/field-group:items-center @md/field-group:*:w-auto",
          "@md/field-group:*:data-[slot=field-label]:flex-auto",
          "@md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
        ],
      },
    },
    defaultVariants: {
      orientation: "vertical",
    },
  }
);

export type FieldVariants = VariantProps<typeof fieldVariants>;

@Directive({
  selector: "[hlmField],hlm-field",
  host: {
    role: "group",
    "data-slot": "field",
    "[attr.data-orientation]": "orientation()",
    "[class]": "_computedClass()",
  },
})
export class HlmField {
  public readonly orientation = input<FieldVariants["orientation"]>("vertical");
  public readonly userClass = input<ClassValue>("", { alias: "class" });

  protected readonly _computedClass = computed(() =>
    hlm(fieldVariants({ orientation: this.orientation() }), this.userClass())
  );
}
