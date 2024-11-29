import {Component, input} from '@angular/core';
import { AnswerInputComponent } from "../answer-input/answer-input.component";
import { QuizProcessorService } from '../quiz-processor.service';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {provideNativeDateAdapter} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from '@angular/material/select';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-collapsible-panel',
  standalone: true,
  imports: [AnswerInputComponent, MatExpansionModule, MatFormFieldModule, MatIconModule, MatInputModule, MatButtonModule, MatSelectModule, FormsModule],
  templateUrl: './collapsible-panel.component.html',
  styleUrl: './collapsible-panel.component.css',
  providers: [provideNativeDateAdapter()],
})
export class CollapsiblePanelComponent {
  questionTitle = 'Question';
  questionType = 'Quiz';
  questionNumber = input.required<number>();

  constructor(public quizProcessorService: QuizProcessorService){}

  onUpdate(event:any){
    this.questionTitle = event.target.value;
  }

  updateInputBoxes(event:any){
    this.questionType = event.target.value;
    console.log(this.questionType);
  }

  addQuestionTitle(event: any){
    this.quizProcessorService.modifyQuestionTitle(this.questionNumber(), event.target.value);
  }
}
