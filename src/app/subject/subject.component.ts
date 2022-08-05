import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  subject;
  color: string;
  approvedSubjects: Array<string>;

  @Input() props: Array<any>;

  constructor() { }

  ngOnInit(): void {
    this.setVariables();
  }

  // Sets variables values
  setVariables(): void {
    this.subject = this.props[0];
    this.color = this.props[1];
    this.approvedSubjects = this.props[2];
  }

  // Checks if requirements are approved
  areRequirementsApproved(): boolean {
    let subjectRequirements: Array<string> = this.subject.requires;
    let flagRequirements: boolean = true;

    if(subjectRequirements !== []) {
      subjectRequirements.forEach(abbreviation => {
        if (!this.approvedSubjects.includes(abbreviation)) {
          flagRequirements = false;
        }
      });
    }

    return flagRequirements;
  }

}
