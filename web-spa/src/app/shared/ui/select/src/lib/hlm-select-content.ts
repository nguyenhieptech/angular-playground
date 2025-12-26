import type { BooleanInput } from "@angular/cdk/coercion";
import { Directive, booleanAttribute, input } from "@angular/core";
import {
  injectExposedSideProvider,
  injectExposesStateProvider,
} from "@spartan-ng/brain/core";
import { classes } from "@/shared/ui/utils";

@Directive({
  selector: "[hlmSelectContent], hlm-select-content",
  host: {
    "[attr.data-state]": '_stateProvider?.state() ?? "open"',
    "[attr.data-side]": '_sideProvider?.side() ?? "bottom"',
  },
})
export class HlmSelectContent {
  public readonly stickyLabels = input<boolean, BooleanInput>(false, {
    transform: booleanAttribute,
  });
  protected readonly _stateProvider = injectExposesStateProvider({ optional: true });
  protected readonly _sideProvider = injectExposedSideProvider({ optional: true });

  constructor() {
    classes(
      () =>
        "relative z-50 w-full min-w-32 overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md data-[side=bottom]:top-[2px] data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:bottom-[2px] data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95"
    );
  }
}
