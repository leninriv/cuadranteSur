import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { toSnakeCase } from 'src/utilities/global';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss']
})
export class DateInputComponent implements OnInit {
  @Input() label: string;
  @Input() form: any;
  @Input() mode: string;
  @Output() public onChangeForm = new EventEmitter<any>();
  value?: any;

  constructor() {
    this.label = 'Campo';
    this.mode = 'date';
  }

  ngOnInit(): void {
    this.validateInitValue()
  }

  validateInitValue() {
    const field = toSnakeCase(this.label);
    if (this.form && this.form[field]) {
      if (this.mode === 'year') {
        const yearSelected = new Date();
        yearSelected.setFullYear(~~this.form[field]);
        this.value = yearSelected;
      } else {
        this.value = this.form[field];
      }

    }
  }

  onChangeValue(text: any) {
    const field = toSnakeCase(this.label);
    let value: any = text ? new Date(text).toLocaleDateString("en-US") : null
    if (this.mode === 'year' && value) {
      value = new Date(value).getFullYear();
    }
    this.onChangeForm.emit({ field, value });
  }

}
