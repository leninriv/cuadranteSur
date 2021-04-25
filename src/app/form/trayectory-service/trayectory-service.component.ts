import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-trayectory-service',
  templateUrl: './trayectory-service.component.html',
  styleUrls: ['./trayectory-service.component.scss']
})
export class TrayectoryServiceComponent implements OnInit {
  @Input() index: number;
  @Input() initialForm?: any;
  @Input() blockname: string;
  @Output() public onChangeForm = new EventEmitter<any>();
  form = {};

  constructor() {
    this.index = 0;
    this.blockname = 'block'
  }

  ngOnInit(): void {
    this.validateInitialForm();
  }

  validateInitialForm() {
    if (this.initialForm && this.initialForm[this.blockname]) {
      this.form = this.initialForm[this.blockname][this.index]
    }
  }

  onChangeValue(value: any) {
    const blockname = this.blockname;
    this.onChangeForm.emit({ blockname, index: this.index, value });
  }


}
