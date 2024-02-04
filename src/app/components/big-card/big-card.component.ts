import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-big-card',
    templateUrl: './big-card.component.html',
    styleUrl: './big-card.component.css',
})
export class BigCardComponent {
    @Input()
    title: string = '';

    @Input()
    imageSource =
        'https://cordierinvestimentos.com.br/wp-content/uploads/2020/09/placeholder.png';
}
