import { Directive } from "@angular/core";
import { classes } from "@/shared/ui/utils";

@Directive({
  selector: "[hlmSkeleton],hlm-skeleton",
  host: {
    "data-slot": "skeleton",
  },
})
export class HlmSkeleton {
  constructor() {
    classes(() => "block rounded-md bg-accent motion-safe:animate-pulse");
  }
}
