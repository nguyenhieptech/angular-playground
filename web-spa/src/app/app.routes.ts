import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "data-table-preview",
    loadChildren: () =>
      import("@/features/data-table-preview/data-table-preview.routes").then(
        (m) => m.dataTablePreviewRoutes
      ),
  },
  {
    path: "field-preview",
    loadChildren: () =>
      import("@/features/field-preview/field-preview.routes").then(
        (m) => m.fieldPreviewRoutes
      ),
  },
  {
    path: "todo",
    loadChildren: () => import("@/features/todo/todo.routes").then((m) => m.todoRoutes),
  },
  {
    path: "counter",
    loadComponent: () =>
      import("@/features/counter/counter").then((m) => m.CounterComponent),
  },
];
