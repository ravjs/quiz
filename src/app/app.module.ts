import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import {MatListModule} from '@angular/material/list';

import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { ApiService } from './api.service';
import { QuestionsComponent } from './questions/questions.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    QuestionsComponent
  ],
  imports: [

    AppRoutingModule,
    FormsModule,
    BrowserModule, BrowserAnimationsModule , MatButtonModule,
    HttpClientModule,

    MatInputModule, MatFormFieldModule,
    MatCardModule,
    MatListModule,

  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
