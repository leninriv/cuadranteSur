import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-previous-elections-block',
  templateUrl: './previous-elections-block.component.html',
  styleUrls: ['./previous-elections-block.component.scss']
})
export class PreviousElectionsBlockComponent implements OnInit {
  @Input() index?: number;
  @Input() initialValue?: any;
  @Output() public onChangeForm = new EventEmitter<any>();

  constructor() {
    this.index = 0;
  }

  ngOnInit(): void {
  }

  onChangeValue(value: any) {
    const blockname = 'previous-elections';
    this.onChangeForm.emit({ blockname, index: this.index, value });
  }

}
