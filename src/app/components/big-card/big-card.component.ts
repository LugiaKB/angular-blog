import { Component, Input, OnInit } from '@angular/core';
import { DefaultImageSources } from '../../../shared/enums';
import { Article } from '../../models/article.interface';

@Component({
    selector: 'app-big-card',
    templateUrl: './big-card.component.html',
    styleUrl: './big-card.component.css',
})
export class BigCardComponent implements OnInit {
    @Input()
    props: Article = {
        id: 0,
        title: '',
        imageSource: DefaultImageSources.Placeholder,
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo porttitor dolor, id maximus est scelerisque ut. Nullam iaculis egestas leo quis imperdiet. Mauris eget interdum odio. Praesent at enim dui. Pellentesque et ex nec libero rutrum euismod. Suspendisse tincidunt in dolor tempor vestibulum.',
    };

    ngOnInit(): void {
        Object.assign(this, this.props);
    }

    id: number = 0;

    title: string = '';

    imageSource: string = DefaultImageSources.Placeholder;

    description: string =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo porttitor dolor, id maximus est scelerisque ut. Nullam iaculis egestas leo quis imperdiet. Mauris eget interdum odio. Praesent at enim dui. Pellentesque et ex nec libero rutrum euismod. Suspendisse tincidunt in dolor tempor vestibulum.';
}
