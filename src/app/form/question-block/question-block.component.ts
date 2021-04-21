import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-question-block',
  templateUrl: './question-block.component.html',
  styleUrls: ['./question-block.component.scss']
})
export class QuestionBlockComponent implements OnInit {
  @Input() blockTitle: string;

  constructor() {
    this.blockTitle = '';
  }

  ngOnInit(): void {
  }

}
