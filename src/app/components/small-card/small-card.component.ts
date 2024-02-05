import { Component, Input } from '@angular/core';
import { DefaultImageSources } from '../../../shared/enums';

@Component({
    selector: 'app-small-card',
    templateUrl: './small-card.component.html',
    styleUrl: './small-card.component.css',
})
export class SmallCardComponent {
    @Input()
    title: string = '';

    @Input()
    imageSource: string = DefaultImageSources.Placeholder;
}
