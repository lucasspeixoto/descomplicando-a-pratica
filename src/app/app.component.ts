import { Component } from '@angular/core';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';
import { ContentComponent } from './components/content/content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ContentComponent, ThemeToggleComponent],
  template: `
    <div
      class="relative bg-cover bg-center object-cover min-h-screen w-full flex justify-center"
      style="background-image: url('/assets/images/galaxy.png')">
      <app-theme-toggle />
      <app-content />
    </div>
  `,
  styles: ``,
})
export class AppComponent {}
