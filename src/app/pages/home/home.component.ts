import { Component } from '@angular/core';
import { articles } from '../../data/article.data';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
})
export class HomeComponent {
    data = articles;
}
