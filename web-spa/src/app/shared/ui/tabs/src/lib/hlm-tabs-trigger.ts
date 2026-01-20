import { Directive, input } from "@angular/core";
import { BrnTabsTrigger } from "@spartan-ng/brain/tabs";
import { classes } from "@/shared/ui/utils";

@Directive({
  selector: "[hlmTabsTrigger]",
  hostDirectives: [
    { directive: BrnTabsTrigger, inputs: ["brnTabsTrigger: hlmTabsTrigger", "disabled"] },
  ],
  host: {
    "data-slot": "tabs-trigger",
  },
})
export class HlmTabsTrigger {
  public readonly triggerFor = input.required<string>({ alias: "hlmTabsTrigger" });
  constructor() {
    classes(
      () =>
        `inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap text-foreground transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:shadow-sm dark:text-muted-foreground dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 dark:data-[state=active]:text-foreground [&_ng-icon]:pointer-events-none [&_ng-icon]:shrink-0 [&_ng-icon:not([class*='text-'])]:text-base`
    );
  }
}
