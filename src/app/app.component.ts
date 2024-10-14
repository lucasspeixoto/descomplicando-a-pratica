import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div>
      <h1>Página Descomplicando a prática</h1>
    </div>
  `,
  styles: ``,
})
export class AppComponent {}
