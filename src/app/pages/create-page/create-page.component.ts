import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { CollapsiblePanelComponent } from '../../create/collapsible-panel/collapsible-panel.component';
import { QuizProcessorService } from '../../create/quiz-processor.service';
import { NavbarComponent } from '../../navbar/navbar.component';

@Component({
  selector: 'app-create-page',
  imports: [
    NavbarComponent,
    CollapsiblePanelComponent,
    RouterLink,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './create-page.component.html',
  styleUrl: './create-page.component.css',
})
export class CreatePageComponent {
  isHidden: boolean = true;
  quizTitle = '';

  constructor(protected quizProcessorService: QuizProcessorService) {}

  trigger() {
    this.isHidden = !this.isHidden;
  }

  addTitle(event: any) {
    this.quizProcessorService.modifyQuizTitle(event.target.value);
  }
}
