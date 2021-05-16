import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-field-value',
  templateUrl: './field-value.component.html',
  styleUrls: ['./field-value.component.scss']
})
export class FieldValueComponent implements OnInit {
  @Input() field?: string;
  @Input() value?: string;
  @Input() link?: boolean;
  @Input() uppercase?: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  validateLink(value: any) {
    return value?.indexOf('http') > -1;
  }
}
