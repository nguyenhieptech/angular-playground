import { Component } from "@angular/core";
import {
  type CellContext,
  type HeaderContext,
  injectFlexRenderContext,
} from "@tanstack/angular-table";
import { HlmCheckboxImports } from "@/components/ui/checkbox";

@Component({
  imports: [HlmCheckboxImports],
  host: {
    class: "flex",
    "aria-label": "Select all",
  },
  template: `
    <hlm-checkbox
      [checked]="_context.table.getIsAllRowsSelected()"
      [indeterminate]="_context.table.getIsSomeRowsSelected()"
      (checkedChange)="_context.table.toggleAllRowsSelected()"
    />
  `,
})
export class TableHeadSelection<T> {
  protected readonly _context = injectFlexRenderContext<HeaderContext<T, unknown>>();
}

@Component({
  imports: [HlmCheckboxImports],
  host: {
    class: "flex",
    "aria-label": "Select Row",
  },
  template: `
    <hlm-checkbox
      [checked]="_context.row.getIsSelected()"
      (checkedChange)="_context.row.getToggleSelectedHandler()($event)"
    />
  `,
})
export class TableRowSelection<T> {
  protected readonly _context = injectFlexRenderContext<CellContext<T, unknown>>();
}
