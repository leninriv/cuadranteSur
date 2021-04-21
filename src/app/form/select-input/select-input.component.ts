import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { toSnakeCase } from 'src/utilities/global';

@Component({
  selector: 'app-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.scss']
})
export class SelectInputComponent implements OnInit {
  @Input() label: string;
  @Input() initialValue?: string;
  @Input() options?: any;
  @Output() public onChangeForm = new EventEmitter<any>();
  value?: any;
  listOfOption?: any;

  constructor() {
    this.label = 'Campo';
    this.options = [];
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
