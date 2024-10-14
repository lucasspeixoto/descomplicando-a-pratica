import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import {
  MatAnchor,
  MatButton,
  MatButtonModule,
  MatIconButton,
} from '@angular/material/button';
import { ThemeService } from '../../services/theme.service';
import { MatIcon } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIcon,
    MatIconButton,
    MatAnchor,
    MatButton,
  ],
  template: `
    <section>
      <div class="flex items-center justify-between flex-col my-[50px] p-4">
        <!-- Profile Photo -->
        <mat-card
          class="dark:bg-gray-900 bg-slate-50 rounded-3xl w-auto mx-4 md:w-[400px]"
          appearance="outlined">
          <mat-card-header>
            <mat-card-title-group>
              <mat-card-title class="text-primary font-bold"
                >Descomplicando a prática</mat-card-title
              >
              <mat-card-subtitle class="text-secondary font-semibold"
                >Canal no Youtue</mat-card-subtitle
              >
              <img
                class="rounded-full w-[120px] h-[120px]"
                alt="Lucas Peixoto"
                src="assets/images/profile_photo.png" />
            </mat-card-title-group>
          </mat-card-header>
          <mat-card-content>
            {{ description }}
          </mat-card-content>
        </mat-card>
      </div>
    </section>
  `,
  styles: ``,
})
export class ContentComponent {
  public themeService = inject(ThemeService);

  public readonly description = `Aqui no Canal Descomplicando a prática você vai encontrar muitos 
  projetos e tutoriais práticos de programação. Teremos muito conteúdo de Angular, 
  React, Java e Spring Boot.`;
}
