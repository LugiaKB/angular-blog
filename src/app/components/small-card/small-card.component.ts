import { Component, Input, OnInit } from '@angular/core';
import { DefaultImageSources } from '../../../shared/enums';
import { Article } from '../../models/article.interface';

@Component({
    selector: 'app-small-card',
    templateUrl: './small-card.component.html',
    styleUrl: './small-card.component.css',
})
export class SmallCardComponent implements OnInit {
    @Input()
    props: Article = {
        id: 0,
        title: '',
        imageSource: DefaultImageSources.Placeholder,
    };

    ngOnInit(): void {
        Object.assign(this, this.props);
    }

    @Input()
    id: number = 0;

    @Input()
    title: string = '';

    @Input()
    imageSource: string = DefaultImageSources.Placeholder;
}
