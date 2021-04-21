import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-academy-block',
  templateUrl: './academy-block.component.html',
  styleUrls: ['./academy-block.component.scss']
})
export class AcademyBlockComponent implements OnInit {
  @Input() index?: number;
  @Input() initialValue?: any;
  @Output() public onChangeForm = new EventEmitter<any>();

  constructor() {
    this.index = 0;
  }

  ngOnInit(): void {
  }

  onChangeValue(value: any) {
    const blockname = 'academy';
    this.onChangeForm.emit({ blockname, index: this.index, value });
  }

}
