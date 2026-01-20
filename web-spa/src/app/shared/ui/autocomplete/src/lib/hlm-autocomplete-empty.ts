import { Directive } from "@angular/core";
import { classes } from "@/shared/ui/utils";

@Directive({
  selector: "[hlmAutocompleteEmpty],hlm-autocomplete-empty",
})
export class HlmAutocompleteEmpty {
  constructor() {
    classes(() => "py-6 text-center text-sm");
  }
}
