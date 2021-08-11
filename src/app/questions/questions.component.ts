import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  question = {}
  questions
//text = ""
constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getQuestions().subscribe( res => {
      console.log("Resultat");
      console.log(res)
      this.questions = res // Saving the response inside our questions list
    })
  }

}
