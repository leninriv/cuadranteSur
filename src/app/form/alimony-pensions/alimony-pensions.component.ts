import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-alimony-pensions',
  templateUrl: './alimony-pensions.component.html',
  styleUrls: ['./alimony-pensions.component.scss']
})
export class AlimonyPensionsComponent implements OnInit {
  @Input() index?: number;
  @Input() initialValue?: any;
  @Output() public onChangeForm = new EventEmitter<any>();

  constructor() {
    this.index = 0;
  }

  ngOnInit(): void {
  }

  onChangeValue(value: any) {
    const blockname = 'alimony_pensions';
    this.onChangeForm.emit({ blockname, index: this.index, value });
  }
}
