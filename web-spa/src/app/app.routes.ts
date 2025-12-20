import { Routes } from "@angular/router";
import { DataTablePreviewPage } from "./features/data-table-preview/data-table-preview.page";
import { TodoPage } from "./features/todo/todo.page";

export const routes: Routes = [
  { path: "todo", component: TodoPage },
  { path: "data-table-preview", component: DataTablePreviewPage },
];
