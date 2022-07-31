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
  areas;

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
    console.log(this.areas)
  }

  getColor(area: string): string {
    let color = this.industrial_areas[area].color;
    return color;
  }

  setFooterWidth(): string {
    let footerWidth = (this.semestersNumber * 100).toString() + 'px';
    return footerWidth;
  }
}
