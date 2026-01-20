import { Component, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgIcon, provideIcons } from "@ng-icons/core";
import { lucideChevronDown } from "@ng-icons/lucide";
import {
  createAngularTable,
  flexRenderComponent,
  FlexRenderDirective,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type ColumnDef,
  type ColumnFiltersState,
  type RowSelectionState,
  type SortingState,
  type VisibilityState,
} from "@tanstack/angular-table";
import { HlmButtonImports } from "@/shared/ui/button";
import { HlmDropdownMenuImports } from "@/shared/ui/dropdown-menu";
import { HlmIconImports } from "@/shared/ui/icon";
import { HlmInputImports } from "@/shared/ui/input";
import { HlmSelectImports } from "@/shared/ui/select";
import { HlmTableImports } from "@/shared/ui/table";
import { ActionDropdown } from "./components/action-dropdown";
import { TableHeadSelection, TableRowSelection } from "./components/selection-column";
import { TableHeadSortButton } from "./components/sort-header-button";

export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

@Component({
  selector: "spartan-data-table-preview",
  imports: [
    HlmButtonImports,
    HlmDropdownMenuImports,
    HlmIconImports,
    HlmInputImports,
    HlmSelectImports,
    HlmTableImports,
    FlexRenderDirective,
    FormsModule,
    NgIcon,
  ],
  providers: [provideIcons({ lucideChevronDown })],
  host: { class: "w-full" },
  templateUrl: "./data-table-preview.html",
})
export class DataTablePreview {
  readonly columns: ColumnDef<Payment>[] = [
    {
      id: "select",
      header: () => flexRenderComponent(TableHeadSelection),
      cell: () => flexRenderComponent(TableRowSelection),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "status",
      id: "status",
      header: "Status",
      enableSorting: false,
      cell: (info) => `<span class="capitalize">${info.getValue<string>()}</span>`,
    },
    {
      accessorKey: "email",
      id: "email",
      header: () => flexRenderComponent(TableHeadSortButton, { inputs: { header: "" } }),
      cell: (info) => `<div class="lowercase">${info.getValue<string>()}</div>`,
    },
    {
      accessorKey: "amount",
      id: "amount",
      header: '<div class="text-right">Amount</div>',
      enableSorting: false,
      cell: (info) => {
        const amount = parseFloat(info.getValue<string>());
        const formatted = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(amount);
        return `<div class="text-right">${formatted}</div>`;
      },
    },
    {
      id: "actions",
      enableHiding: false,
      cell: () => flexRenderComponent(ActionDropdown),
    },
  ];

  readonly table = createAngularTable<Payment>(() => ({
    data: PAYMENT_DATA,
    columns: this.columns,
    onSortingChange: (updater) => {
      updater instanceof Function
        ? this.sorting.update(updater)
        : this.sorting.set(updater);
    },
    onColumnFiltersChange: (updater) => {
      updater instanceof Function
        ? this.columnFilters.update(updater)
        : this.columnFilters.set(updater);
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: (updater) => {
      updater instanceof Function
        ? this.columnVisibility.update(updater)
        : this.columnVisibility.set(updater);
    },
    onRowSelectionChange: (updater) => {
      updater instanceof Function
        ? this.rowSelection.update(updater)
        : this.rowSelection.set(updater);
    },
    state: {
      sorting: this.sorting(),
      columnFilters: this.columnFilters(),
      columnVisibility: this.columnVisibility(),
      rowSelection: this.rowSelection(),
    },
  }));

  readonly columnFilters = signal<ColumnFiltersState>([]);
  readonly sorting = signal<SortingState>([]);
  readonly rowSelection = signal<RowSelectionState>({});
  readonly columnVisibility = signal<VisibilityState>({});

  readonly hidableColumns = this.table
    .getAllColumns()
    .filter((column) => column.getCanHide());

  filterChange(email: Event) {
    const target = email.target as HTMLInputElement;
    const typedValue = target.value;
    this.table.setGlobalFilter(typedValue);
  }

  filterChanged(event: Event) {
    this.table
      .getColumn("email")
      ?.setFilterValue((event.target as HTMLInputElement).value);
  }
}

const PAYMENT_DATA: Payment[] = [
  {
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    email: "ken99@yahoo.com",
  },
  {
    id: "3u1reuv4",
    amount: 242,
    status: "success",
    email: "abe45@gmail.com",
  },
  {
    id: "derv1ws0",
    amount: 837,
    status: "processing",
    email: "monserrat44@gmail.com",
  },
  {
    id: "5kma53ae",
    amount: 874,
    status: "success",
    email: "silas22@gmail.com",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    email: "carmella@hotmail.com",
  },
  {
    id: "derv1ws2",
    amount: 562,
    status: "processing",
    email: "monserrat44@gmail.com",
  },
  {
    id: "5kma53af",
    amount: 781,
    status: "success",
    email: "inter@gmail.com",
  },
  {
    id: "bhqecj4b",
    amount: 925,
    status: "failed",
    email: "carmella@gmail.com",
  },
  {
    id: "7kma53ah",
    amount: 781,
    status: "success",
    email: "sansserif@gmail.com",
  },
  {
    id: "thqegj4b",
    amount: 925,
    status: "failed",
    email: "nitro@hotmail.com",
  },
];
