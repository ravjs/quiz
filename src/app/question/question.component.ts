import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  question = {
      "text": "",
      "correctAnswer" : "",
      "answer1" : "",
      "answer2" : "",
      "answer3" : ""
  }
  //text = ""
  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }



  post (question){
    this.api.postQuestion(question)
  }

}
