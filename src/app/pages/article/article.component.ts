import { Component, Input } from '@angular/core';
import { DefaultImageSources } from '../../../shared/enums';

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html',
    styleUrl: './article.component.css',
})
export class ArticleComponent {
    @Input()
    imageSource: string = DefaultImageSources.Placeholder;

    @Input()
    title: string = 'TÍTULO DA NOTÍCIA';

    @Input()
    description: string = 'descrição da notícia';
}
