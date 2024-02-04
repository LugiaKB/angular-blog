import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-small-card',
    templateUrl: './small-card.component.html',
    styleUrl: './small-card.component.css',
})
export class SmallCardComponent {
    @Input()
    title: string = '';

    @Input()
    imageSource =
        'https://cordierinvestimentos.com.br/wp-content/uploads/2020/09/placeholder.png';
}
