import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QuizProcessorService } from '../quiz-processor.service';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-answer-input',
  standalone: true,
  imports: [FormsModule, MatCheckboxModule, MatInputModule, MatFormFieldModule],
  templateUrl: './answer-input.component.html',
  styleUrl: './answer-input.component.css'
})
export class AnswerInputComponent {
  input = '';
  isChecked = false;
  checkboxChecked: boolean | null = false;
  checkboxEnabled: boolean = false;
  qId = input.required<number>();
  answerId = input.required<number>();
  answerText = input<string>();

  constructor(private quizProcessorService: QuizProcessorService){}

  updateCheckboxState(): void {
    this.checkboxEnabled = !!this.input;
    this.checkboxChecked = (this.checkboxEnabled && this.input !== '') ? null : false;
    this.isChecked = !(this.checkboxChecked === null || !this.checkboxChecked);
  }

  onCheck(){
    if(this.isChecked){
      this.quizProcessorService.addQuestionCorrectAnswer(this.qId(), this.answerId());
    } else {
      this.quizProcessorService.deleteQuestionCorrectAnswer(this.qId(), this.answerId());
    }
    console.log(this.isChecked);
  }

  addAnswer(event:any){
    this.quizProcessorService.modifyQuestionAnswer(this.qId(), event.target.value, this.answerId());
    this.onCheck();
  }
}
