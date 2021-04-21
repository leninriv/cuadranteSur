import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { toSnakeCase } from 'src/utilities/global';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {
  @Input() placeholder: string;
  @Input() label: string;
  @Input() initialValue?: string;
  @Output() public onChangeForm = new EventEmitter<any>();
  value?: any;

  constructor() {
    this.placeholder = 'Ingresar aqui';
    this.label = 'Campo';
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
