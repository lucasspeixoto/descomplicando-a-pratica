import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, inject, signal } from '@angular/core';

import {
  MatAnchor,
  MatButton,
  MatButtonModule,
  MatIconButton,
} from '@angular/material/button';
import { ThemeService } from '../../services/theme.service';
import { MatIcon } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { YouTubePlayer } from '@angular/youtube-player';
import { MatIconModule } from '@angular/material/icon';
import { SocialMediaLinkComponent } from '../social-media-link/social-media-link.component';
import { socialMediaUrls } from '../../constants/social-media-urls';
import { lecturesUrls } from '../../constants/lectures-urls';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule,
    MatIcon,
    MatIconButton,
    MatAnchor,
    MatButton,
    YouTubePlayer,
    SocialMediaLinkComponent,
  ],
  template: `
    <section
      id="startOfPageRef"
      class="dark:bg-gray-900 bg-slate-50 rounded-3xl w-auto mx-4 md:w-[500px]">
      <div class="flex items-center justify-between flex-col my-[50px] p-4">
        <!-- Profile Photo -->
        <img
          class="rounded-full w-[120px] h-[120px]"
          alt="Lucas Peixoto"
          src="assets/images/profile_photo.png" />

        <!-- Message -->
        <p class="my-4 text-xl text-primary font-semibold">
          Alcance o próximo nível neste
          <a
            class="text-tertiary font-bold hover:underline hover:cursor-pointer"
            target="_blank"
            [href]="channelLink"
            >canal</a
          >
          comigo!
        </p>

        <!-- Iframe canal -->
        <youtube-player
          placeholderImageQuality="standard"
          [videoId]="videoId"
          loadApi="true"
          suggestedQuality="default"
          [height]="200"
          [width]="310" />

        <!-- Links -->
        <section class="flex justify-center gap-8 items-center w-full my-4">
          @for (media of socialMedias; track media.linkTitle) {
            <app-social-media-link
              [linkTitle]="media.linkTitle"
              [link]="media.link"
              [imageRef]="media.imageRef" />
          }
        </section>

        <!-- Link Medium -->
        <section
          class="select-none hover:underline hover:cursor-pointer flex justify-center items-center font-semibold text-xl rounded-xl h-[40px] w-full my-4 dark:text-white text-black bg-gradient-to-r from-indigo-500 to-sky-500 dark:from-indigo-800 dark:to-sky-800">
          <span
            matTooltip="Acesse"
            class="my-4 text-xl font-semibold hover:underline hover:cursor-pointer">
            <a target="_blank" [href]="mediumLink">Meu Perfil no Medium</a>
          </span>
        </section>

        <!-- Palestras -->
        <section
          matTooltip="Clique para ver"
          (click)="toggleShowLectures()"
          class="hover:cursor-pointer flex justify-center items-center rounded-xl h-[40px] w-full  bg-gradient-to-r from-indigo-500 to-sky-500 dark:from-indigo-800 dark:to-sky-800">
          <span
            class="select-none hover:underline flex justify-center items-center font-semibold text-xl dark:text-white text-black">
            Palestras
          </span>
        </section>

        @if (showLectures()) {
          <div
            class="w-full my-4 mb-4 flex flex-wrap gap-2 justify-evenly w-max-[450px]">
            @for (lecture of lecturesUrls; track lecture.videoId) {
              <div class="flex flex-col items-center justify-center">
                <youtube-player
                  placeholderImageQuality="standard"
                  [videoId]="lecture.videoId"
                  loadApi="true"
                  suggestedQuality="default"
                  [height]="150"
                  [width]="180" />
                <span id="endOfPageRef" class="font-semibold leading-5">{{
                  lecture.title
                }}</span>
              </div>
            }
          </div>
        }
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

  public readonly videoId = 'No4Xch9pjo4';

  public readonly channelLink =
    'https://www.youtube.com/channel/UC6LY6Xw5ff_KaHwjHWRA9oA';

  public readonly mediumLink = 'https://medium.com/@lspeixotodev';

  public readonly socialMedias = socialMediaUrls;

  public readonly lecturesUrls = lecturesUrls;

  public showLectures = signal(false);

  private scroller = inject(ViewportScroller);

  public toggleShowLectures(): void {
    this.showLectures.update(current => !current);

    const pageIdRef = this.showLectures() ? 'endOfPageRef' : 'startOfPageRef';

    setTimeout(() => {
      this.scroller.scrollToAnchor(pageIdRef);
    }, 200);
  }
}
