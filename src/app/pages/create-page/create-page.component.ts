import { Component } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { CollapsiblePanelComponent } from '../../create/collapsible-panel/collapsible-panel.component';
import { QuizProcessorService } from '../../create/quiz-processor.service';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-create-page',
  standalone: true,
  imports: [NavbarComponent, CollapsiblePanelComponent, RouterLink],
  templateUrl: './create-page.component.html',
  styleUrl: './create-page.component.css'
})
export class CreatePageComponent {
  isHidden:boolean = true;
  quizTitle='';

  constructor(protected quizProcessorService: QuizProcessorService){}

  trigger(){
    this.isHidden = !this.isHidden;
  }

  addTitle(event:any){
    this.quizProcessorService.modifyQuizTitle(event.target.value);
  }
}
