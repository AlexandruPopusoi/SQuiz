import { Injectable } from '@angular/core';

interface IQuestion {
  questionTitle:string,
  questionType:string,
  answer:string[],
  correctAnswer:number[]
}

interface IQuiz {
  quizID:number,
  quizTitle:string,
  questionsArray:IQuestion[]
}

@Injectable({
  providedIn: 'root'
})
export class QuizProcessorService {

  constructor() {
    const quizes = localStorage.getItem('quizes');

    if (quizes){
      this.quizArray = JSON.parse(quizes)
    }
  }

  quizTitle = '';

  questionsArray : IQuestion[] = [
    {questionTitle:'',
      questionType:'Quiz',
      answer:[],
      correctAnswer:[]
    }
  ];

  quizArray : IQuiz[] = []

  finishQuiz(){
    let id = 0;
    try{
      id = this.quizArray[this.quizArray.length - 1].quizID ;
    } catch (error){
      id = 0;
    }
    this.quizArray.push(    
      { quizID:id + 1,
        quizTitle:this.quizTitle,
        questionsArray:this.questionsArray
      })
    localStorage.setItem('quizes', JSON.stringify(this.quizArray))
  }

  getQuestions(){
    return this.questionsArray;
  }

  addQuestion(){
    this.questionsArray.push(    
      {questionTitle:'',
      questionType:'Quiz',
      answer:[],
      correctAnswer:[]
    })
    console.log(this.questionsArray)
    setTimeout(() => {document.documentElement.scrollTo(0,document.body.scrollHeight+100) }, 0.001);
  }

  deleteQuestion(id:number){
    this.questionsArray.splice(id, 1);
  }

  modifyQuizTitle(title:string){
    this.quizTitle = title;
    console.log(this.quizTitle);
  }

  modifyQuestionAnswer(id:number, text:string, aId:number){
    this.questionsArray[id].answer[aId] = text;
    console.log(this.questionsArray[id]);
  }

  modifyQuestionTitle(id:number, text:string){
    this.questionsArray[id].questionTitle = text;
    console.log(this.questionsArray[id]);
  }

  addQuestionCorrectAnswer(id:number, aId:number){
    if(!this.questionsArray[id].correctAnswer.includes(aId)){
      this.questionsArray[id].correctAnswer.push(aId);
    }
    console.log(this.questionsArray[id]);
  }
  
  deleteQuestionCorrectAnswer(id:number, aId:number){
    if(this.questionsArray[id].correctAnswer.includes(aId)){
      let index = this.questionsArray[id].correctAnswer.indexOf(aId);
      this.questionsArray[id].correctAnswer.splice(index, 1);
    }
    console.log(this.questionsArray[id]);
  }

}
