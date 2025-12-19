import { Component, inject } from "@angular/core";
import { NgIcon, provideIcons } from "@ng-icons/core";
import { lucideMoon } from "@ng-icons/lucide";
import { ThemeService } from "@/components/theme/theme.service";
import { HlmButton } from "@/components/ui/button";
import { HlmIcon } from "@/components/ui/icon";

// See more: https://github.com/spartan-ng/spartan/blob/main/apps/app/src/app/shared/header/header-dark-mode.ts
@Component({
  selector: "header-dark-mode",
  imports: [HlmButton, NgIcon, HlmIcon],
  providers: [provideIcons({ lucideMoon })],
  template: `
    <button size="sm" variant="ghost" hlmBtn (click)="toggleMode()">
      <ng-icon hlm [svg]="_themeIcon" size="20px" />
      <span class="sr-only">Toggle theme</span>
    </button>
  `,
})
export class HeaderDarkMode {
  private readonly _themeService = inject(ThemeService);

  public toggleMode() {
    this._themeService.toggleMode();
  }

  protected readonly _themeIcon = `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      <path d="M12 3l0 18" />
      <path d="M12 9l4.65 -4.65" />
      <path d="M12 14.3l7.37 -7.37" />
      <path d="M12 19.6l8.85 -8.85" />
    </svg>
  `;
}
