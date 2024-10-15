import { Component, inject, OnInit } from '@angular/core';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';
import { ContentComponent } from './components/content/content.component';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ContentComponent, ThemeToggleComponent],
  template: `
    <div
      class="relative bg-cover bg-center object-cover flex justify-center items-start min-h-screen w-full"
      style="background-image: url('/assets/images/galaxy.png')">
      <app-theme-toggle />
      <app-content />
    </div>
  `,
  styles: ``,
})
export class AppComponent implements OnInit {
  private themeService = inject(ThemeService);

  public ngOnInit(): void {
    const currentColorTheme = this.themeService.getPreferredColorTheme();

    this.themeService.setColorTheme(currentColorTheme);
  }
}
