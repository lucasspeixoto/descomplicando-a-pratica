import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-social-media-link',
  standalone: true,
  imports: [MatTooltipModule],
  template: `
    <a [href]="link()" target="_blank" [matTooltip]="linkTitle()">
      <img
        class="rounded-full w-[30px] h-[30px] hover:cursor-pointer"
        [alt]="linkTitle()"
        [src]="imageRef()" />
    </a>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialMediaLinkComponent {
  public linkTitle = input.required<string>();

  public link = input.required<string>();

  public imageRef = input.required<string>();
}
