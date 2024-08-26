import {Component, Output, EventEmitter, input, ViewChild} from '@angular/core';
import { AnswerInputComponent } from "../answer-input/answer-input.component";
import { QuizProcessorService } from '../quiz-processor.service';
import {
  MatAccordion, MatExpansionModule,
} from "@angular/material/expansion";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {provideNativeDateAdapter} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-collapsible-panel',
  standalone: true,
  imports: [AnswerInputComponent, MatExpansionModule, MatFormFieldModule, MatIconModule, MatInputModule, MatButtonModule],
  templateUrl: './collapsible-panel.component.html',
  styleUrl: './collapsible-panel.component.css',
  providers: [provideNativeDateAdapter()],
})
export class CollapsiblePanelComponent {
  // @ViewChild(MatAccordion) accordion: MatAccordion;
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
