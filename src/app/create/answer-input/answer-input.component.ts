import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { CheckboxControlValueAccessor, FormGroup, FormsModule, NgModel } from '@angular/forms';
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
  isChecked = true;
  isDisabled = this.input.length <= 0;
  qId = input.required<number>();
  answerId = input.required<number>();
  answerText = input<string>();

  constructor(private quizProcessorService: QuizProcessorService){}

  onCheck(event:any){
    // this.isChecked = event.target['checked'];
    if(this.isChecked){
      this.quizProcessorService.addQuestionCorrectAnswer(this.qId(), this.answerId());
    } else {
      this.quizProcessorService.deleteQuestionCorrectAnswer(this.qId(), this.answerId());
      // this.isChecked=false
    }
    console.log(this.isChecked);
  }

  sendCheck(cId:number){
    if(this.isChecked){
      this.quizProcessorService.addQuestionCorrectAnswer(this.qId(), cId);
    } else {
      this.quizProcessorService.deleteQuestionCorrectAnswer(this.qId(), cId);
    }
  }

  addAnswer(event:any){
    this.quizProcessorService.modifyQuestionAnswer(this.qId(), event.target.value, this.answerId());
  }

  onDisable(cId:number){
    // this.sendCheck(cId);

    return input.length > 0 ? null : false;
  }

  unchecking() {
    if(this.isChecked && input.length < 0){
      this.isChecked = false;
    }
  }

}
