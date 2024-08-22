import { Component } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { CardComponent } from '../../card/card.component';

@Component({
  selector: 'app-not-found-page',
  standalone: true,
  imports: [NavbarComponent, NotFoundPageComponent, CardComponent],
  templateUrl: './not-found-page.component.html',
  styleUrl: './not-found-page.component.css'
})
export class NotFoundPageComponent {

}
