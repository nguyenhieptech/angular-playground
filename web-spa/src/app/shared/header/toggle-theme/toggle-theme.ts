import { Component, inject } from "@angular/core";
import { NgIcon, provideIcons } from "@ng-icons/core";
import { lucideMoon } from "@ng-icons/lucide";
import { ThemeService } from "@/shared/theme/theme.service";
import { HlmButton } from "@/shared/ui/button";
import { HlmIcon } from "@/shared/ui/icon";

// See more: https://github.com/spartan-ng/spartan/blob/main/apps/app/src/app/shared/header/header-dark-mode.ts
@Component({
  selector: "toggle-theme",
  imports: [NgIcon, HlmButton, HlmIcon],
  providers: [provideIcons({ lucideMoon })],
  templateUrl: "./toggle-theme.html",
})
export class ToggleTheme {
  private readonly themeService = inject(ThemeService);

  toggleTheme() {
    this.themeService.toggleMode();
  }

  protected readonly themeIcon = `
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
