import { Component, Output, EventEmitter, input } from '@angular/core';
import { AnswerInputComponent } from "../answer-input/answer-input.component";
import { QuizProcessorService } from '../quiz-processor.service';

@Component({
  selector: 'app-collapsible-panel',
  standalone: true,
  imports: [AnswerInputComponent],
  templateUrl: './collapsible-panel.component.html',
  styleUrl: './collapsible-panel.component.css'
})
export class CollapsiblePanelComponent {
  @Output() select = new EventEmitter();
  isHidden:boolean = true;
  questionTitle = 'Question';
  questionType = 'Quiz';
  questionNumber = input.required<number>();

  constructor(public quizProcessorService: QuizProcessorService){}

  onSelectPanel(){
    this.select.emit(this.isHidden ? !this.isHidden : this.isHidden)
  }

  trigger(){
    this.isHidden = !this.isHidden;
  }

  onUpdate(event:any){
    this.questionTitle = event.target.value;
  }

  updateInputBoxes(event:any){
    this.questionType = event.target.value;
    console.log(this.questionType);
  }

  onDeleteQuestion(){
    this.select.emit(this.questionNumber());
  }

  addQuestionTitle(event: any){
    this.quizProcessorService.modifyQuestionTitle(this.questionNumber(), event.target.value);
  }
}
