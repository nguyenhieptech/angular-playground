import { Directive } from "@angular/core";
import { BrnAccordionItem } from "@spartan-ng/brain/accordion";
import { classes } from "@/shared/ui/utils";

@Directive({
  selector: "[hlmAccordionItem],brn-accordion-item[hlm],hlm-accordion-item",
  hostDirectives: [
    {
      directive: BrnAccordionItem,
      inputs: ["isOpened"],
      outputs: ["openedChange"],
    },
  ],
})
export class HlmAccordionItem {
  constructor() {
    classes(() => "flex flex-1 flex-col border-b border-border");
  }
}
