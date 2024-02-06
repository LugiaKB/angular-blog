import { Component, Input, OnInit } from '@angular/core';
import { DefaultImageSources } from '../../../shared/enums';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../../models/article.interface';
import { articles } from '../../data/article.data';

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html',
    styleUrl: './article.component.css',
})
export class ArticleComponent implements OnInit {
    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.route.paramMap.subscribe((value) => {
            this.id = parseInt(value.get('id') as string);
            console.log(this.id);
        });

        let props: Article = articles.find(({ id }) => id === this.id)!;

        if (!!props) Object.assign(this, props);
    }

    private id: number = 0;

    imageSource: string = DefaultImageSources.Placeholder;

    title: string = 'TÍTULO DA NOTÍCIA';

    description: string = 'descrição da notícia';
}
