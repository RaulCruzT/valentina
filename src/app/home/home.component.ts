import { Component, OnInit } from '@angular/core';

import industrial_subjects from '../../data/industrial_subjects.json';
import industrial_areas from '../../data/industrial_areas.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  semesters: Array<string>;
  subjects: Array<any>;
  semestersNumber: number;
  industrial_subjects: Object;
  industrial_areas: Object;
  areas: Array<any>;

  totalSubjects: number = 0;
  approvedSubjects: Array<string>;

  constructor() { }

  ngOnInit(): void {
    this.setSemesters();
  }

  setSemesters(): void {
    this.industrial_subjects = industrial_subjects;
    this.industrial_areas = industrial_areas;
    this.semestersNumber = Object.keys(industrial_subjects).length;
    this.semesters = Object.keys(industrial_subjects);
    this.subjects = Object.values(industrial_subjects);
    this.areas = Object.values(industrial_areas);
    this.countSubjects();
  }

  getColor(area: string): string {
    let color = this.industrial_areas[area].color;
    return color;
  }

  setFooterWidth(): string {
    let footerWidth = (this.semestersNumber * 100).toString() + 'px';
    return footerWidth;
  }

  countSubjects(): void {
    this.subjects.forEach(semester => {
      this.totalSubjects += semester.length;
    });
  }

  setSelectedSubjectValue(subject): void {
    let counter: number = 0;

    this.subjects.forEach(semester => {

      let isSubjectHere = semester.find(s => s === subject);

      if(isSubjectHere) {
        let semesterName: string = this.semesters[counter];
        let subjectIndex: number = semester.findIndex(s => s === subject);

        let selectedValue: boolean = this.industrial_subjects[semesterName][subjectIndex].selected;

        this.industrial_subjects[semesterName][subjectIndex].selected = !selectedValue;
      }

      counter +=1;
    });
  }

}
