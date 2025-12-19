# Angular Playground

<p align="center">
  <img src="angular-icon.png" width="100" alt="Angular Icon" />
</p>

## Installation

```bash
cd web-spa
pnpm i
```

## Running the app

```bash
# development
pnpm start
```

## Test

```bash
# unit tests
pnpm test
```

## Tech stack

- Angular (v21) https://angular.dev/
- spartan/ui https://www.spartan.ng/documentation/about/

## spartan/ui

### Installation

spartan/ui uses a two-layer architecture: you install `@spartan-ng/brain` from npm for accessible primitives, then copy `helm` styles into your codebase for customization.

**NOTE: Use the CLI to add more components instead of copy-paste is preferable.**

The CLI will prompt you to select which components to add. Each component includes:

- Brain primitive (installed to node_modules)
- Helm styles (copied to your project)
- All necessary dependencies

```bash
# Run this in terminal to add UI components, or pnpm add:ui
ng g @spartan-ng/cli:ui

# Add a specific component: ng g @spartan-ng/cli:ui <your-component>
ng g @spartan-ng/cli:ui button
```

See more: https://www.spartan.ng/documentation/installation

### Custom import alias in this project

The default import alias spartan/ui uses in their documentation is `@spartan-ng/helm`. For example:

```typescript
// demo-default-import.component.ts
import { Component } from "@angular/core";
import { FormControl, ReactiveFormsModule, Validators } from "@angular/forms";
import { BrnSelectImports } from "@spartan-ng/brain/select";
// @spartan-ng/helm
import { HlmButtonImports } from "@spartan-ng/helm/button";
import { HlmCheckboxImports } from "@spartan-ng/helm/checkbox";
import { HlmFieldImports } from "@spartan-ng/helm/field";
import { HlmInputImports } from "@spartan-ng/helm/input";
import { HlmSelectImports } from "@spartan-ng/helm/select";
import { HlmTextareaImports } from "@spartan-ng/helm/textarea";
```

Here we use `@/components/ui` import alias instead.

```typescript
// demo-default-import.component.ts
import { Component } from "@angular/core";
import { FormControl, ReactiveFormsModule, Validators } from "@angular/forms";
import { BrnSelectImports } from "@spartan-ng/brain/select";
// @/components/ui
import { HlmButtonImports } from "@/components/ui/button";
import { HlmCheckboxImports } from "@/components/ui/checkbox";
import { HlmFieldImports } from "@/components/ui/field";
import { HlmInputImports } from "@/components/ui/input";
import { HlmSelectImports } from "@/components/ui/select";
import { HlmTextareaImports } from "@/components/ui/textarea";
```

Config rules inside `components.json` are customizable and can be updated.

```json
{
  "componentsPath": "src/components/ui",
  "importAlias": "@/components/ui"
}
```

See more: https://www.spartan.ng/documentation/components-json

Remember: Import alias are automatically added in `tsconfig.json` if using the spartan/ui CLI (`ng g @spartan-ng/cli:ui`, see more: https://www.spartan.ng/documentation/cli).
If somehow you add code manually (copy-paste), make sure to add that specific import alias for that component inside `tsconfig.json`.

```json
{
  "compilerOptions": {
    "paths": {
      "@/components/ui/accordion": [
        "./src/components/ui/accordion/src/index.ts"
      ],
      "@/components/ui/autocomplete": [
        "./src/components/ui/autocomplete/src/index.ts"
      ],
      "@/components/ui/button": ["./src/components/ui/button/src/index.ts"],
      "@/components/ui/command": ["./src/components/ui/command/src/index.ts"],
      "@/components/ui/field": ["./src/components/ui/field/src/index.ts"],
      "@/components/ui/form-field": [
        "./src/components/ui/form-field/src/index.ts"
      ],
      "@/components/ui/icon": ["./src/components/ui/icon/src/index.ts"],
      "@/components/ui/input": ["./src/components/ui/input/src/index.ts"],
      "@/components/ui/utils": ["./src/components/ui/utils/src/index.ts"],
      "@/components/ui/popover": ["./src/components/ui/popover/src/index.ts"]
      // More components...
    }
  }
}
```

### Dark mode

Dark mode implementation is placed inside `src/components/theme/theme.service.ts` and `src/components/header/header-dark-mode.ts`.

See more: https://www.spartan.ng/documentation/dark-mode

Theme service implementation reference:
https://github.com/spartan-ng/spartan/blob/main/apps/app/src/app/shared/theme.service.ts

Toggle mode implementation reference:
https://github.com/spartan-ng/spartan/blob/main/apps/app/src/app/shared/header/header-dark-mode.ts

## Import order in code

Import order defines in `.prettierrc`

- Built-in node modules like `node:fs`
- Modules from `@angular`
- Third-party modules (e.g: `@tanstack/angular-table`, `@tanstack/angular-query-experimental`, etc.)
- UI components (spartan/ui) `@/components/ui`
- Relative imports

```json
"importOrder": [
  "<BUILTIN_MODULES>",
  "^@angular/(.*)$",
  "<THIRD_PARTY_MODULES>",
  "^@/components.*",
  "^./",
  "^../"
]
```

See more: https://github.com/trivago/prettier-plugin-sort-imports
