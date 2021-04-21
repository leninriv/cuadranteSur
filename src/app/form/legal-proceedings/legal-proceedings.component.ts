import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-legal-proceedings',
  templateUrl: './legal-proceedings.component.html',
  styleUrls: ['./legal-proceedings.component.scss']
})
export class LegalProceedingsComponent implements OnInit {
  @Input() index?: number;
  @Input() initialValue?: any;
  @Input() blockname?: string;
  @Input() actor?: boolean;
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
