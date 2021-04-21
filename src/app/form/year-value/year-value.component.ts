import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-year-value',
  templateUrl: './year-value.component.html',
  styleUrls: ['./year-value.component.scss']
})
export class YearValueComponent implements OnInit {
  @Input() index?: number;
  @Input() initialValue?: any;
  @Input() blockname?: string;
  @Output() public onChangeForm = new EventEmitter<any>();

  constructor() {
    this.index = 0;
  }

  ngOnInit(): void {
  }

  onChangeValue(value: any) {
    const blockname = this.blockname;
    this.onChangeForm.emit({ blockname, index: this.index, value });
  }
}
