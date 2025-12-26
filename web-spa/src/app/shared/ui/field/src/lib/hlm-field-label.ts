import { Directive } from "@angular/core";
import { HlmLabel } from "@/shared/ui/label";
import { classes } from "@/shared/ui/utils";

@Directive({
  selector: "[hlmFieldLabel],hlm-field-label",
  hostDirectives: [HlmLabel],
  host: {
    "data-slot": "field-label",
  },
})
export class HlmFieldLabel {
  constructor() {
    classes(() => [
      "group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50",
      "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border *:data-[slot=field]:p-4",
      "has-data-[checked=true]:border-primary has-data-[checked=true]:bg-primary/5 dark:has-data-[checked=true]:bg-primary/10",
      "has-data-[state=checked]:border-primary has-data-[state=checked]:bg-primary/5 dark:has-data-[state=checked]:bg-primary/10",
    ]);
  }
}
