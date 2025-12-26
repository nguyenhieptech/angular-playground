import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Renderer2,
  effect,
  inject,
  signal,
} from "@angular/core";
import { provideIcons } from "@ng-icons/core";
import { lucideX } from "@ng-icons/lucide";
import {
  injectExposedSideProvider,
  injectExposesStateProvider,
} from "@spartan-ng/brain/core";
import { cva } from "class-variance-authority";
import { HlmIconImports } from "@/shared/ui/icon";
import { classes } from "@/shared/ui/utils";
import { HlmSheetClose } from "./hlm-sheet-close";

export const sheetVariants = cva(
  "fixed z-50 flex flex-col gap-4 bg-background shadow-lg transition ease-in-out data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:animate-in data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 h-auto border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 h-auto border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right:
          "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
);

@Component({
  selector: "hlm-sheet-content",
  imports: [HlmSheetClose, HlmIconImports],
  providers: [provideIcons({ lucideX })],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "data-slot": "sheet-content",
    "[attr.data-state]": "state()",
  },
  template: `
    <ng-content />
    <button hlmSheetClose>
      <span class="sr-only">Close</span>
      <ng-icon hlm size="sm" name="lucideX" />
    </button>
  `,
})
export class HlmSheetContent {
  private readonly _stateProvider = injectExposesStateProvider({ host: true });
  private readonly _sideProvider = injectExposedSideProvider({ host: true });
  public readonly state = this._stateProvider.state ?? signal("closed");
  private readonly _renderer = inject(Renderer2);
  private readonly _element = inject(ElementRef);

  constructor() {
    classes(() => sheetVariants({ side: this._sideProvider.side() }));
    effect(() => {
      this._renderer.setAttribute(
        this._element.nativeElement,
        "data-state",
        this.state()
      );
    });
  }
}
