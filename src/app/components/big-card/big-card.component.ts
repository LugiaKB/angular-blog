import { Component, Input } from '@angular/core';
import { DefaultImageSources } from '../../../shared/enums';

@Component({
    selector: 'app-big-card',
    templateUrl: './big-card.component.html',
    styleUrl: './big-card.component.css',
})
export class BigCardComponent {
    @Input()
    title: string = '';

    @Input()
    imageSource: string = DefaultImageSources.Placeholder;

    @Input()
    description: string =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo porttitor dolor, id maximus est scelerisque ut. Nullam iaculis egestas leo quis imperdiet. Mauris eget interdum odio. Praesent at enim dui. Pellentesque et ex nec libero rutrum euismod. Suspendisse tincidunt in dolor tempor vestibulum.';
}
