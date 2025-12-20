import { Component } from "@angular/core";
import { provideIcons } from "@ng-icons/core";
import { lucideGithub, lucideTwitter } from "@ng-icons/lucide";
import { HeaderDarkMode } from "./header-dark-mode";

@Component({
  selector: "app-header",
  imports: [HeaderDarkMode],
  providers: [provideIcons({ lucideTwitter, lucideGithub })],
  host: {
    class: "backdrop-blur-sm sticky top-0 z-50 w-full",
  },
  template: `
    <div class="container-wrapper 3xl:fixed:px-0 px-6">
      <div class="3xl:fixed:container flex h-16 items-center gap-2">
        <header-dark-mode />
      </div>
    </div>
  `,
})
export class Header {}
