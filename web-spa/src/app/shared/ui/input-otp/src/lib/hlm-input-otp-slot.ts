import type { NumberInput } from "@angular/cdk/coercion";
import {
  ChangeDetectionStrategy,
  Component,
  input,
  numberAttribute,
} from "@angular/core";
import { BrnInputOtpSlot } from "@spartan-ng/brain/input-otp";
import { classes } from "@/shared/ui/utils";
import { HlmInputOtpFakeCaret } from "./hlm-input-otp-fake-caret";

@Component({
  selector: "hlm-input-otp-slot",
  imports: [BrnInputOtpSlot, HlmInputOtpFakeCaret],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "data-slot": "input-otp-slot",
  },
  template: `
    <brn-input-otp-slot [index]="index()">
      <hlm-input-otp-fake-caret />
    </brn-input-otp-slot>
  `,
})
export class HlmInputOtpSlot {
  /** The index of the slot to render the char or a fake caret */
  public readonly index = input.required<number, NumberInput>({
    transform: numberAttribute,
  });

  constructor() {
    classes(() => [
      "relative flex h-9 w-9 items-center justify-center border-y border-r border-input text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md dark:bg-input/30",
      'has-[brn-input-otp-slot[data-active="true"]]:z-10 has-[brn-input-otp-slot[data-active="true"]]:border-ring has-[brn-input-otp-slot[data-active="true"]]:ring-[3px] has-[brn-input-otp-slot[data-active="true"]]:ring-ring/50',
    ]);
  }
}
