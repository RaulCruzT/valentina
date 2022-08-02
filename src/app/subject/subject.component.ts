import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  subject;
  color: string;

  @Input() props;

  constructor() { }

  ngOnInit(): void {
    this.setVariables();
  }

  setVariables(): void {
    this.subject = this.props[0];
    this.color = this.props[1];
  }

}
