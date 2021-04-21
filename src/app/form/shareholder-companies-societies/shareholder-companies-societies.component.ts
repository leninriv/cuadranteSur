import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-shareholder-companies-societies',
  templateUrl: './shareholder-companies-societies.component.html',
  styleUrls: ['./shareholder-companies-societies.component.scss']
})
export class ShareholderCompaniesSocietiesComponent implements OnInit {
  @Input() index?: number;
  @Input() initialValue?: any;
  @Output() public onChangeForm = new EventEmitter<any>();

  constructor() {
    this.index = 0;
  }

  ngOnInit(): void {
  }

  onChangeValue(value: any) {
    const blockname = 'shareholder-companies-societies';
    this.onChangeForm.emit({ blockname, index: this.index, value });
  }

}
