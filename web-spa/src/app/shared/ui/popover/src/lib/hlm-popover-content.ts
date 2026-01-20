import { Directive, ElementRef, Renderer2, effect, inject, signal } from "@angular/core";
import { injectExposesStateProvider } from "@spartan-ng/brain/core";
import { classes } from "@/shared/ui/utils";

@Directive({
  selector: "[hlmPopoverContent],[brnPopoverContent][hlm]",
})
export class HlmPopoverContent {
  private readonly _stateProvider = injectExposesStateProvider({ host: true });
  public state = this._stateProvider.state ?? signal("closed");
  private readonly _renderer = inject(Renderer2);
  private readonly _element = inject(ElementRef);

  constructor() {
    effect(() => {
      this._renderer.setAttribute(
        this._element.nativeElement,
        "data-state",
        this.state()
      );
    });

    classes(
      () =>
        "relative w-72 rounded-md border border-border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95"
    );
  }
}
