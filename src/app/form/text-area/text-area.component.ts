import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { toSnakeCase } from 'src/utilities/global';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss']
})
export class TextAreaComponent implements OnInit {
  @Input() placeholder: string;
  @Input() label: string;
  @Input() initialValue?: string;
  @Input() form: any;
  @Output() public onChangeForm = new EventEmitter<any>();
  value?: any;

  constructor() {
    this.placeholder = 'Ingresar aqui';
    this.label = 'Campo';
  }

  ngOnInit(): void {
    this.validateInitValue()
  }

  validateInitValue() {
    const field = toSnakeCase(this.label);
    if (this.form && this.form[field]) {
      this.value = this.form[field];
    }
  }

  onChangeValue(text: any) {
    const field = toSnakeCase(this.label);
    this.onChangeForm.emit({ field, value: text });
  }
}
