import { Component } from '@angular/core';
import { CardComponent } from '../../card/card.component';
import { NavbarComponent } from '../../navbar/navbar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CardComponent, NavbarComponent, RouterLink],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  cardsText = [
    { title: 'Quiz', text: 'Play your favourite quizez!', url: '/app-modes-page' },
    { title: 'Leaderboards', text: 'Compete against your friends!', url: '/app-modes-page' },
    { title: 'Create', text: 'Create a new quiz!', url: '/app-create-page' },
  ];

}
