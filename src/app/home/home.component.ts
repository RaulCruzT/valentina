import { Component, OnInit } from '@angular/core';

import industrial_subjects from '../../data/industrial_subjects.json';
import industrial_areas from '../../data/industrial_areas.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Data
  semesters: Array<string>;
  subjects: Array<any>;
  semestersNumber: number;
  industrial_subjects: Object;
  industrial_areas: Object;
  areas: Array<any> = [];

  totalSubjects: number = 0;
  approvedSubjects: Array<string>;
  approvedPercentage: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.setSemesters();
  }

  // Sets data
  setSemesters(): void {
    this.industrial_subjects = industrial_subjects;
    this.industrial_areas = industrial_areas;
    this.semestersNumber = Object.keys(industrial_subjects).length;
    this.semesters = Object.keys(industrial_subjects);
    this.subjects = Object.values(industrial_subjects);
    this.areas = Object.values(industrial_areas);
    this.countSubjects();
    this.approvedSubjects = [];
  }

  // Gets color of subject area
  getColor(area: string): string {
    let color = this.industrial_areas[area].color;
    return color;
  }

  // Sets footer width depending on number of semesters
  setFooterWidth(): string {
    let footerWidth = (this.semestersNumber * 100).toString() + 'px';
    return footerWidth;
  }

  // Counts number of total subjects
  countSubjects(): void {
    this.subjects.forEach(semester => {
      this.totalSubjects += semester.length;
    });
  }

  // Changes the value of the selected property of subject
  setSelectedSubjectValue(subject): void {
    let counter: number = 0;

    this.subjects.forEach(semester => {

      let isSubjectHere = semester.find(s => s === subject);

      if (isSubjectHere) {
        let semesterName: string = this.semesters[counter];
        let subjectIndex: number = semester.findIndex(s => s === subject);
        let selectedValue: boolean = this.industrial_subjects[semesterName][subjectIndex].selected;

        this.industrial_subjects[semesterName][subjectIndex].selected = !selectedValue;

        let newSelectedValue: boolean = this.industrial_subjects[semesterName][subjectIndex].selected;

        this.setApprovedSubjects(newSelectedValue, subject);
      }

      counter +=1;
    });
  }

  // Add or remove subject to approved subjects
  setApprovedSubjects(selectedValue: boolean, subject): void {
    if (selectedValue) {
      this.approvedSubjects.push(subject.abbreviation);
    } else {
      this.approvedSubjects = this.approvedSubjects.filter(item => item !== subject.abbreviation);
    }
  }

  // Set title for progress circle
  setTitle(): number {
    let approvedSubjects: number = this.approvedSubjects.length;
    let totalSubjects: number = this.totalSubjects;

    this.approvedPercentage = Math.round(approvedSubjects/totalSubjects*100);

    return this.approvedPercentage;
  }

  // Set subtitle for progress circle
  setSubtitle(): string {
    let approvedSubjectsString: string = this.approvedSubjects.length.toString();
    let totalSubjectsString: string = this.totalSubjects.toString();

    let subtitle: string = approvedSubjectsString + "/" + totalSubjectsString;

    return subtitle;
  }

  // Set progress circle color
  setProgressColor(): string {
    let percentage: number = this.approvedPercentage;
    let color: string;

    if (percentage === 0) {
      color = "#ff9aa2";
    } else if (percentage < 25) {
      color = "#ffb7b2";
    } else if (percentage < 50) {
      color = "#ffdac1";
    } else if (percentage < 75) {
      color = "#e2f0cb";
    } else if (percentage < 100) {
      color = "#b5ead7";
    } else if (percentage === 100) {
      color = "#c7ceea";
    }
    return color;
  }

}
