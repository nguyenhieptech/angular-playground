import { Directive, input } from "@angular/core";
import { BrnTabsContent } from "@spartan-ng/brain/tabs";
import { classes } from "@/shared/ui/utils";

@Directive({
  selector: "[hlmTabsContent]",
  hostDirectives: [
    { directive: BrnTabsContent, inputs: ["brnTabsContent: hlmTabsContent"] },
  ],
  host: {
    "data-slot": "tabs-content",
  },
})
export class HlmTabsContent {
  public readonly contentFor = input.required<string>({ alias: "hlmTabsContent" });

  constructor() {
    classes(
      () =>
        "mt-2 ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
    );
  }
}
