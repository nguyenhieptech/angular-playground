import { Component } from "@angular/core";
import { provideIcons } from "@ng-icons/core";
import { lucideGithub, lucideTwitter } from "@ng-icons/lucide";
import { ToggleTheme } from "./toggle-theme/toggle-theme";

@Component({
  selector: "app-header",
  imports: [ToggleTheme],
  providers: [provideIcons({ lucideTwitter, lucideGithub })],
  host: {
    class: "sticky top-0 z-50 w-full backdrop-blur-sm",
  },
  templateUrl: "./header.html",
})
export class Header {}
