import { Routes } from "@angular/router";
import { DataTablePreview } from "./data-table-preview/data-table-preview.component";
import { Todo } from "./todo/todo.component";

export const routes: Routes = [
  { path: "todo", component: Todo },
  { path: "data-table-preview", component: DataTablePreview },
];
