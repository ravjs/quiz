import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http" //For Http request

@Injectable()
export class ApiService{

  constructor(private http: HttpClient){

  }

  getQuestions(){
    return this.http.get('https://localhost:44303/api/questions');
  }

  postQuestion(question){

    this.http.post('https://localhost:44303/api/questions', question).subscribe(res =>{

      console.log(res)

    })

  }

}
