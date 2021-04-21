import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-companies-societies',
  templateUrl: './companies-societies.component.html',
  styleUrls: ['./companies-societies.component.scss']
})
export class CompaniesSocietiesComponent implements OnInit {
  @Input() index?: number;
  @Input() initialValue?: any;
  @Output() public onChangeForm = new EventEmitter<any>();

  constructor() {
    this.index = 0;
  }

  ngOnInit(): void {
  }

  onChangeValue(value: any) {
    const blockname = 'companies-societies';
    this.onChangeForm.emit({ blockname, index: this.index, value });
  }
}
