import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SubjectComponent } from './subject/subject.component';
import { TitleComponent } from './title/title.component';

import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SubjectComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({
      radius: 75,
      outerStrokeWidth: 8,
      innerStrokeWidth: 2,
      innerStrokeColor: "#4a4a4a",
      animation: false,
      maxPercent: 100,
      subtitle:"Progreso",
      titleColor: "#4a4a4a",
      subtitleColor: "#4a4a4a",
      unitsColor: "#4a4a4a"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
