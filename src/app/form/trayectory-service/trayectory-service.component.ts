import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-trayectory-service',
  templateUrl: './trayectory-service.component.html',
  styleUrls: ['./trayectory-service.component.scss']
})
export class TrayectoryServiceComponent implements OnInit {
  @Input() index?: number;
  @Input() initialValue?: any;
  @Output() public onChangeForm = new EventEmitter<any>();

  constructor() {
    this.index = 0;
  }

  ngOnInit(): void {
  }

  onChangeValue(value: any) {
    const blockname = 'trayectory-service';
    this.onChangeForm.emit({ blockname, index: this.index, value });
  }


}
