import { Component, OnInit } from '@angular/core';
import { cloneDeep } from 'src/utilities/global';

@Component({
  selector: 'app-grid-content',
  templateUrl: './grid-content.component.html',
  styleUrls: ['./grid-content.component.scss']
})
export class GridContentComponent implements OnInit {
  value?: string;
  form: any;
  arrayBlock1 = [0]; // academy-block
  arrayBlock2 = [0]; // previous-elections-block
  arrayBlock3 = [0]; // public service trayectory
  arrayBlock4 = [0]; // companies and Societies
  arrayBlock5 = [0]; // shareholder companies and Societies
  arrayBlock6 = [0]; // tax declaration
  arrayBlock7 = [0]; // Declaration of tax on the exit of foreign currency
  arrayBlock8 = [0]; // Legal proceedings actor
  arrayBlock9 = [0]; // Legal proceedings defendant
  arrayBlock10 = [0]; // Alimony pensions
 

  constructor() {
    this.form = {};
  }

  ngOnInit(): void {

  }


  onChangeForm(event: any) {
    const formCopy = cloneDeep(this.form);
    formCopy[event.field] = event.value;
    this.form = { ...formCopy };
    console.log('event', this.form);
  }

  onChangeFormBlock(event: any) {
    const { blockname, index, value } = event;
    const { field } = value;
    let formCopy = cloneDeep(this.form);
    if (!formCopy[blockname]) {
      formCopy[blockname] = new Array();
    }
    if (!formCopy[blockname][index]) {
      formCopy[blockname][index] = {};
    }
    formCopy[blockname][index][field] = value.value;
    this.form = { ...formCopy };
    console.log('event block', this.form);
  }

  pushBlockItem(array: Array<number>) {
    array.push(array.length);
  }


}
