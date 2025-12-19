import { Component } from "@angular/core";
import { NgIcon, provideIcons } from "@ng-icons/core";
import { lucideEllipsis } from "@ng-icons/lucide";
import { type CellContext, injectFlexRenderContext } from "@tanstack/angular-table";
import { HlmButtonImports } from "@/components/ui/button";
import { HlmDropdownMenuImports } from "@/components/ui/dropdown-menu";
import { HlmIconImports } from "@/components/ui/icon";
import type { Payment } from "./data-table-preview.component";

@Component({
  selector: "spartan-action-dropdown",
  imports: [HlmButtonImports, NgIcon, HlmIconImports, HlmDropdownMenuImports],
  providers: [provideIcons({ lucideEllipsis })],
  template: `
    <button
      hlmBtn
      variant="ghost"
      class="h-8 w-8 p-0"
      [hlmDropdownMenuTrigger]="ActionDropDownMenu"
    >
      <span class="sr-only">Open menu</span>
      <ng-icon hlm size="sm" name="lucideEllipsis" />
    </button>

    <ng-template #ActionDropDownMenu>
      <hlm-dropdown-menu>
        <hlm-dropdown-menu-label>Actions</hlm-dropdown-menu-label>
        <button hlmDropdownMenuItem (click)="copyPaymentId()">Copy payment ID</button>
        <hlm-dropdown-menu-separator />
        <button hlmDropdownMenuItem>View customer</button>
        <button hlmDropdownMenuItem>View payment details</button>
      </hlm-dropdown-menu>
    </ng-template>
  `,
})
export class ActionDropdown {
  private readonly _context = injectFlexRenderContext<CellContext<Payment, unknown>>();

  copyPaymentId() {
    const payment = this._context.row.original;
    navigator.clipboard.writeText(payment.id);
  }
}
