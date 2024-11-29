import { Component } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { RouterOutlet } from '@angular/router';
import { QuizProcessorService } from '../../create/quiz-processor.service';

@Component({
  selector: 'app-modes-page',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet],
  templateUrl: './modes-page.component.html',
  styleUrl: './modes-page.component.css'
})
export class ModesPageComponent {

  constructor(protected quizProcessorService: QuizProcessorService) { }

  trigger() {
    console.log('yo');
  }

}
