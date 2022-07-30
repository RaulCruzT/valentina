import { Component, OnInit } from '@angular/core';

import industrial_subjects from '../../data/industrial_subjects.json';
import industrial_areas from '../../data/industrial_areas.json';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  semesters: Array<string>;
  subjects: Object;
  semestersNumber: number;
  industrial_subjects: Object;
  industrial_areas: Object;

  constructor() { }

  ngOnInit(): void {
    this.setSemesters();
  }

  setSemesters(): void {
    this.industrial_subjects = industrial_subjects;
    this.semestersNumber = Object.keys(industrial_subjects).length;
    this.semesters = Object.keys(industrial_subjects);
    this.subjects = Object.values(industrial_subjects);
  }
}
