import { Component } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { CollapsiblePanelComponent } from '../../create/collapsible-panel/collapsible-panel.component';
import { QuizProcessorService } from '../../create/quiz-processor.service';

@Component({
  selector: 'app-create-page',
  standalone: true,
  imports: [NavbarComponent, CollapsiblePanelComponent],
  templateUrl: './create-page.component.html',
  styleUrl: './create-page.component.css'
})
export class CreatePageComponent {
  isHidden:boolean = true;
  quizTitle='';

  constructor(protected quizProcessorService: QuizProcessorService){}

  trigger(){
    if(this.isHidden === false) this.isHidden = true 
    else this.isHidden = false 
  }

  addTitle(event:any){
    this.quizProcessorService.modifyQuizTitle(event.target.value);
  }
}
