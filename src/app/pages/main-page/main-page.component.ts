import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardComponent } from '../../card/card.component';
import { NavbarComponent } from '../../navbar/navbar.component';

@Component({
  selector: 'app-main-page',
  imports: [CardComponent, NavbarComponent, RouterLink],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent {
  cardsText = [
    { title: 'Quiz', text: 'Play your favourite quizez!', url: '/app-modes-page' },
    { title: 'Leaderboards', text: 'Compete against your friends!', url: '/app-modes-page' },
    { title: 'Create', text: 'Create a new quiz!', url: '/app-create-page' },
  ];
}
