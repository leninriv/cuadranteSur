import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { toSnakeCase } from 'src/utilities/global';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss']
})
export class DateInputComponent implements OnInit {
  @Input() label: string;
  @Input() initialValue?: string;
  @Input() mode: string;
  @Output() public onChangeForm = new EventEmitter<any>();
  value?: any;

  constructor() {
    this.label = 'Campo';
    this.mode = 'date';
  }

  ngOnInit(): void {
    if (this.initialValue) {
      this.value = this.initialValue;
    }
  }

  onChangeValue(text: any) {
    const field = toSnakeCase(this.label);
    this.onChangeForm.emit({ field, value: text });
  }

}
